import { WorksInterface } from '../../../interfaces/category.interface';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { messages, ValidationType } from '../../../enums/project.enum';

export class CreateCategoryDto {
  @IsNotEmpty()
  @MinLength(3, { message: messages(ValidationType.MinLength) })
  @MaxLength(20, { message: messages(ValidationType.MaxLength) })
  readonly title: string;

  @IsNotEmpty()
  @MinLength(3, { message: messages(ValidationType.MinLength) })
  readonly description: string;

  readonly works: WorksInterface[];
  public createdDate: string;
}

export class UpdateCategoryDto extends CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  readonly id: string;
  public updatedDate: string;
}
