import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

import { Address } from '../../../interfaces/project.interface';
import { messages, ValidationType } from '../../../enums/project.enum';

export class CreateProjectDto {
  @IsNotEmpty()
  @MinLength(3, { message: messages(ValidationType.MinLength) })
  @MaxLength(20, { message: messages(ValidationType.MaxLength) })
  readonly title: string;

  @IsNotEmpty()
  @MinLength(3, { message: messages(ValidationType.MinLength) })
  readonly description: string;

  readonly address: Address;
  public archived: boolean;
  public createdDate: string;

  @IsNotEmpty()
  @IsNumber()
  readonly square: number;
}

export class UpdateProjectDto extends CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  readonly id: string;
  public updatedDate: string;
}
