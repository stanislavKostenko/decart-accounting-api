import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CategoryInterface } from '../../../interfaces/category.interface';
import { CreateCategoryDto } from '../dto/categories.dto';
import { Observable, of } from 'rxjs';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel('Categories') private readonly categoryModel: Model<CategoryInterface>) {
  }

  getCategories(): Observable<CategoryInterface[]> {
    const response = this.categoryModel.find().exec();
    return of(response);
  }

  createCategory(body: CreateCategoryDto): Observable<CategoryInterface> {
    const today = new Date();
    body.createdDate = today.toISOString();
    const response = this.categoryModel(body);
    return of(response.save());
  }
}
