import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { ProjectsService } from '../services/projects.service';
import { CreateProjectDto, UpdateProjectDto } from '../dto/project';
import { FindOneParams } from '../../../classes/general-validation.class';

@Controller('projects')
export class ProjectsController {
  constructor(private projectService: ProjectsService) {
  }

  @Get('/all')
  getAllProjects() {
    return this.projectService.getAllProjects();
  }

  @Get(':id')
  getProjectById(@Param('id') id: FindOneParams) {
    return this.projectService.getProjectById(id);
  }

  @Post('/create')
  createProject(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.createProject(createProjectDto);
  }

  @Put(':id')
  updateProject(@Param('id') id: FindOneParams, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.updateProject(id, updateProjectDto);
  }

  @Put(':id/archive')
  archiveProject(@Param('id') id: FindOneParams, @Body() body: {archived: boolean}) {
    return this.projectService.archivedProject(id, body);
  }

  @Delete(':id')
  deleteProject(@Param('id') id: FindOneParams) {
    return this.projectService.deleteProject(id);
  }
}
