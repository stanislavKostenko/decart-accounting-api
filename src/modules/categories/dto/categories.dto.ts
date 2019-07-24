import { WorksInterface } from '../../../interfaces/category.interface';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { messages, ValidationType } from '../../../enums/project.enum';
import { AbstractDto } from '../../../classes/dto.abstract';

export class CreateCategoryDto extends AbstractDto {
  @IsNotEmpty()
  @MinLength(3, { message: messages(ValidationType.MinLength) })
  @MaxLength(20, { message: messages(ValidationType.MaxLength) })
  readonly title: string;

  @IsNotEmpty()
  @MinLength(3, { message: messages(ValidationType.MinLength) })
  readonly description: string;

  readonly works: WorksInterface[];
}

export class UpdateCategoryDto extends CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  readonly id: string;
}
