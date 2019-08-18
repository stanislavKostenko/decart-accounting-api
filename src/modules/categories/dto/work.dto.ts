import { AbstractDto } from '../../../classes/dto.abstract';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { messages, ValidationType } from '../../../enums/project.enum';
import { FindOneParams } from '../../../classes/general-validation.class';

export class CreateWorkDto extends AbstractDto {
  @IsNotEmpty()
  @MinLength(3, { message: messages(ValidationType.MinLength) })
  @MaxLength(20, { message: messages(ValidationType.MaxLength) })
  readonly title: string;
  @IsNotEmpty()
  readonly units: string;
  public categoryId: FindOneParams;
}

export class UpdateWorkDto extends CreateWorkDto {
  @IsNotEmpty()
  @IsString()
  readonly id: string;
}
