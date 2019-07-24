import { Model } from 'mongoose';
import { Observable, of } from 'rxjs';
import { FindOneParams } from './general-validation.class';

import { ModelDto } from '../types/types';

export class DataBaseAbstract {
  constructor(protected readonly model: Model<any>) {
  }

  getAll(): Observable<any[]> {
    const response = this.model.find().exec();
    return of(response);
  }

  findById(id: FindOneParams): Observable<any> {
    const project = this.model.findById(id);
    return of(project);
  }

  create(body: ModelDto): Observable<any> {
    const today = new Date();
    body.createdDate = today.toISOString();
    const response = this.model(body);
    return of(response.save());
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
