import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable } from 'rxjs';

import { CategoryInterface, WorksInterface } from '../../../interfaces/category.interface';
import { DataBaseAbstract } from '../../../classes/db.abstract';
import { FindOneParams } from '../../../classes/general-validation.class';
import { CreateWorkDto } from '../dto/work.dto';

@Injectable()
export class WorksService extends DataBaseAbstract {
  public works: WorksInterface[];

  constructor(@InjectModel('Works') protected readonly workModel: Model<WorksInterface>,
              @InjectModel('Categories') protected readonly categoryModel: Model<CategoryInterface>) {
    super(workModel, categoryModel);
  }

  getWorks(categoryId: FindOneParams): Observable<WorksInterface[]> {
    return this.getAllWhere('categoryId', categoryId);
  }

  createWork(categoryId: FindOneParams, body: CreateWorkDto): Observable<any> {
    body.categoryId = categoryId;
    return this.createSubModel(categoryId, body);
  }
}
