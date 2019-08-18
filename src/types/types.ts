import { CreateProjectDto, UpdateProjectDto } from '../modules/projects/dto/project';
import { CreateCategoryDto, UpdateCategoryDto } from '../modules/categories/dto/categories.dto';
import { CreateWorkDto, UpdateWorkDto } from '../modules/categories/dto/work.dto';

export type ModelDto =
  CreateProjectDto |
  UpdateProjectDto |
  CreateCategoryDto |
  UpdateCategoryDto |
  CreateWorkDto |
  UpdateWorkDto;
