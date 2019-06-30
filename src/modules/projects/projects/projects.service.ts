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
    const createdProject = new this.projectModel(body);
    return of(createdProject.save());
  }

  updateProject(id: string, body: Project): Observable<Project> {
    const updatedProject = this.projectModel.findByIdAndUpdate(id, body, { new: true });
    return of(updatedProject);
  }

  deleteProject(id: string): Observable<{success: string}> {
    const message = Object.assign({}, {success: 'Project has been delete successfully'});
    this.projectModel.findByIdAndRemove(id, { rawResult: true });
    return of(message);
  }
}
