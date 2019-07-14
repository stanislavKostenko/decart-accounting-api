import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateProjectDto, UpdateProjectDto } from '../dto/project';
import { Project } from '../../../interfaces/project.interface';
import { FindOneParams } from '../../../classes/general-validation.class';

@Injectable()
export class ProjectsService {
  constructor(@InjectModel('Projects') private readonly projectModel: Model<Project>) {
  }

  getAllProjects(): Observable<Project[]> {
    const response = this.projectModel.find().exec();
    return of(response);
  }

  getProjectById(id: FindOneParams): Observable<Project> {
    const project = this.projectModel.findById(id);
    return of(project);
  }

  createProject(body: CreateProjectDto): Observable<Project> {
    const today = new Date();
    body.archived = false;
    body.createdDate = today;
    const response = new this.projectModel(body);
    return of(response.save());
  }

  updateProject(id: FindOneParams, body: UpdateProjectDto): Observable<Project> {
    const today = new Date();
    body.updatedDate = today.toDateString();
    const response = this.projectModel.findByIdAndUpdate(id, body, { new: true });
    return of(response);
  }

  deleteProject(id: FindOneParams): Observable<any> {
    const response = this.projectModel.findByIdAndRemove(id, { select: id });
    return of(response);
  }
}
