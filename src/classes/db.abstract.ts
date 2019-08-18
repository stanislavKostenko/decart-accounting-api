import { Model } from 'mongoose';
import { from, Observable, of } from 'rxjs';
import { FindOneParams } from './general-validation.class';

import { ModelDto } from '../types/types';
import { flatMap } from 'rxjs/operators';

export class DataBaseAbstract {
  constructor(protected readonly model: Model<any>,
              protected readonly parentModel?: Model<any>) {
  }

  getAll(): Observable<any[]> {
    const response = this.model.find().exec();
    return of(response);
  }

  getAllWithRelationships(child: string): Observable<any> {
    const response = this.model.find().populate(child).exec();
    return of(response);
  }

  getAllWhere(field: string, value: any): Observable<any[]> {
    const response = this.model.where(field, value).exec();
    return of(response);
  }

  findById(id: FindOneParams): Observable<any> {
    const project = this.model.findById(id).exec();
    return of(project);
  }

  create(body: ModelDto): Observable<any> {
    const today = new Date();
    body.createdDate = today.toISOString();
    const response = this.model(body);
    return of(response.save());
  }

  createSubModel(parentId: FindOneParams, body: ModelDto): Observable<any> {
    const child = this.model(body);
    child.save();
    const parent = this.parentModel.findById(parentId).exec();
    return from(parent).pipe(flatMap((model: Model) => {
      model.works.push(child.id);
      model.save();
      return of(child);
    }));
  }

  updateById(body: ModelDto, id: FindOneParams): Observable<any> {
    const today = new Date();
    body.updatedDate = today.toISOString();
    const response = this.model.findByIdAndUpdate(id, body, { new: true });
    return of(response);
  }

  deleteById(id: FindOneParams): Observable<any> {
    const response = this.model.findByIdAndRemove(id, { select: id });
    return of(response);
  }
}
