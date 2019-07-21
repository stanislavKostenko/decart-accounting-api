import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './modules/projects/projects.module';
import { config } from '../envConfig';
import { CategoriesModule } from './modules/categories/categories.module';

@Module({
  imports: [
    MongooseModule.forRoot(config().dbUri, {
      useFindAndModify: false,
      useNewUrlParser: true,
    }),
    ProjectsModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
