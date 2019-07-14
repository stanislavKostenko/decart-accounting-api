import { IsDateString, IsNotEmpty, IsNumber, IsNumberString, MaxLength, MinLength } from 'class-validator';

import { ProjectEnumErrorMessages } from '../../../enums/project.enum';
import { Address } from '../../../interfaces/project.interface';

export class CreateProjectDto {
  @IsNotEmpty()
  @MinLength(3, { message: ProjectEnumErrorMessages.MinLength })
  @MaxLength(20, { message: ProjectEnumErrorMessages.MaxLength })
  readonly title: string;

  @IsNotEmpty()
  @MinLength(3, { message: ProjectEnumErrorMessages.MinLength })
  readonly description: string;

  readonly address: Address;
  public archived: boolean;
  public createdDate: Date;

  @IsNotEmpty()
  @IsNumber()
  readonly square: number;
}

export class UpdateProjectDto extends CreateProjectDto {
  @IsNotEmpty()
  @IsNumberString()
  readonly id: string;

  @IsDateString()
  public updatedDate: string;
}
