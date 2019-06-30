import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsController } from './controller/projects.controller';
import { ProjectSchema } from '../../schemas/projects.schema';
import { ProjectsService } from './services/projects.service';

@Module({
  controllers: [ProjectsController],
  imports: [MongooseModule.forFeature([
      { name: 'Projects', schema: ProjectSchema },
    ],
  ),
  ],
  providers: [ProjectsService],
})
export class ProjectsModule {
}
