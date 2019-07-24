import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable } from 'rxjs';

import { CategoryInterface } from '../../../interfaces/category.interface';
import { CreateCategoryDto, UpdateCategoryDto } from '../dto/categories.dto';
import { FindOneParams } from '../../../classes/general-validation.class';
import { DataBaseAbstract } from '../../../classes/db.abstract';

@Injectable()
export class CategoriesService extends DataBaseAbstract {
  constructor(@InjectModel('Categories') protected readonly categoryModel: Model<CategoryInterface>) {
    super(categoryModel);
  }

  getCategories(): Observable<CategoryInterface[]> {
    return this.getAll();
  }

  createCategory(body: CreateCategoryDto): Observable<CategoryInterface> {
    return this.create(body);
  }

  updateCategory(body: UpdateCategoryDto, id: FindOneParams): Observable<CategoryInterface> {
    return this.updateById(body, id);
  }

  deleteCategory(id: FindOneParams): Observable<any> {
    return this.deleteById(id);
  }
}
