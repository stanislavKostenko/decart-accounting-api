import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { CategoriesService } from '../../services/categories.service';
import { CreateCategoryDto, UpdateCategoryDto } from '../../dto/categories.dto';
import { FindOneParams } from '../../../../classes/general-validation.class';
import { Observable } from 'rxjs';
import { CategoryInterface } from '../../../../interfaces/category.interface';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {
  }

  @Get('/all')
  getAllCategories(): Observable<CategoryInterface[]> {
    return this.categoriesService.getCategories();
  }

  @Get(':id')
  getCategory(@Param('id') id: FindOneParams): Observable<CategoryInterface> {
    return this.categoriesService.getCategory(id);
  }

  @Post('/create')
  createCategory(@Body() body: CreateCategoryDto): Observable<CategoryInterface> {
    return this.categoriesService.createCategory(body);
  }

  @Put(':id')
  updateCategory(@Body() body: UpdateCategoryDto, @Param('id') id: FindOneParams): Observable<CategoryInterface> {
    return this.categoriesService.updateCategory(body, id);
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: FindOneParams): Observable<any> {
    return this.categoriesService.deleteCategory(id);
  }
}
