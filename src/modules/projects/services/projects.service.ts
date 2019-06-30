import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateProjectDto } from '../dto/project';
import { Project } from '../../../interfaces/project.interface';

@Injectable()
export class ProjectsService {
  constructor(@InjectModel('Projects') private readonly projectModel: Model<Project>) {
  }

  getAllProjects(): Observable<Project[]> {
    return of(this.projectModel.find().exec());
  }

  getProjectById(id: string): Observable<Project> {
    const project = this.projectModel.findById(id);
    return of(project);
  }

  createProject(body: CreateProjectDto): Observable<Project> {
    const response = new this.projectModel(body);
    return of(response.save());
  }

  updateProject(id: string, body: Project): Observable<Project> {
    const response = this.projectModel.findByIdAndUpdate(id, body, { new: true });
    return of(response);
  }

  deleteProject(id: string): Observable<any> {
    const response = this.projectModel.findByIdAndRemove(id, {select: id});
    return of(response);
  }
}
