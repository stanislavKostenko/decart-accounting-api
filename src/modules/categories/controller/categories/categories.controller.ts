import { Body, Controller, Get, Post } from '@nestjs/common';

import { CategoriesService } from '../../services/categories.service';
import { CreateCategoryDto } from '../../dto/categories.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {
  }

  @Get('/all')
  getAllCategories() {
    return this.categoriesService.getCategories();
  }

  @Post('/create')
  createCategory(@Body() body: CreateCategoryDto) {
    return this.categoriesService.createCategory(body);
  }
}
