import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { WorksService } from '../../services/works.service';
import { Observable } from 'rxjs';
import { WorksInterface } from '../../../../interfaces/category.interface';
import { FindOneParams } from '../../../../classes/general-validation.class';
import { CreateWorkDto } from '../../dto/work.dto';

@Controller('categories')
export class WorksController {
  constructor(private worksService: WorksService) {
  }

  @Get(':categoryId/works')
  getWorks(@Param('categoryId') categoryId: FindOneParams): Observable<WorksInterface[]> {
    return this.worksService.getWorks(categoryId);
  }

  @Post(':categoryId/works/create')
  createWork(@Param('categoryId') categoryId: FindOneParams,
             @Body() body: CreateWorkDto): Observable<any> {
    return this.worksService.createWork(categoryId, body);
  }
}
