import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CategoriesController } from './controller/categories/categories.controller';
import { CategoriesService } from './services/categories.service';
import { CategorySchema } from '../../schemas/category.shema';

@Module({
  controllers: [CategoriesController],
  imports: [MongooseModule.forFeature([
      { name: 'Categories', schema: CategorySchema },
    ],
  )],
  providers: [CategoriesService],
})
export class CategoriesModule {
}
