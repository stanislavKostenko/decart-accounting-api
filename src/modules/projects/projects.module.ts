import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsController } from './controllers/projects/projects.controller';
import { ProjectSchema } from '../../schemas/projects.schema';
import { ProjectsService } from './projects/projects.service';

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
