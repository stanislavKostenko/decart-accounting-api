import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CategoriesController } from './controller/categories/categories.controller';
import { CategoriesService } from './services/categories.service';
import { WorksController } from './controller/works/works.controller';
import { WorksService } from './services/works.service';
import { CategorySchema } from '../../schemas/category.shema';
import { WorkSchema } from '../../schemas/work.schema';

@Module({
  controllers: [CategoriesController, WorksController],
  imports: [MongooseModule.forFeature([
      { name: 'Categories', schema: CategorySchema, collection: 'categories' },
      { name: 'Works', schema: WorkSchema, collection: 'works'},
    ],
  )],
  providers: [CategoriesService, WorksService],
})
export class CategoriesModule {
}
