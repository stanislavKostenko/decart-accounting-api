import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateProjectDto, UpdateProjectDto } from '../dto/project';
import { Project } from '../../../interfaces/project.interface';
import { FindOneParams } from '../../../classes/general-validation.class';
import { DataBaseAbstract } from '../../../classes/db.abstract';

@Injectable()
export class ProjectsService extends DataBaseAbstract {
  constructor(@InjectModel('Projects') protected readonly projectModel: Model<Project>) {
    super(projectModel);
  }

  getAllProjects(): Observable<Project[]> {
    return this.getAll();
  }

  getProjectById(id: FindOneParams): Observable<Project> {
    return this.findById(id);
  }

  createProject(body: CreateProjectDto): Observable<Project> {
    body.archived = false;
    return this.create(body);
  }

  updateProject(id: FindOneParams, body: UpdateProjectDto): Observable<Project> {
    return this.updateById(body, id);
  }

  deleteProject(id: FindOneParams): Observable<any> {
    return this.deleteById(id);
  }

  archivedProject(id: FindOneParams, body: {archived: boolean}): Observable<Project> {
    const project: Project = this.projectModel.findById(id).exec();
    project.archived = body.archived;
    return this.updateById(project, id);
  }
}
