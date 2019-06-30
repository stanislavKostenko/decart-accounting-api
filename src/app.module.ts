import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './modules/projects/projects.module';
import { config } from '../envConfig';

@Module({
  imports: [
    MongooseModule.forRoot(config().dbUri, {
      useFindAndModify: false,
      useNewUrlParser: true,
    }),
    ProjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
