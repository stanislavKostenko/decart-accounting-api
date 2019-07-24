import { CreateProjectDto, UpdateProjectDto } from '../modules/projects/dto/project';
import { CreateCategoryDto, UpdateCategoryDto } from '../modules/categories/dto/categories.dto';

export type ModelDto =
  CreateProjectDto |
  UpdateProjectDto |
  CreateCategoryDto |
  UpdateCategoryDto;
