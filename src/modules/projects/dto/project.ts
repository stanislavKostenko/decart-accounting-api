export class CreateProjectDto {
  readonly title: string;
  readonly description: string;
}

export class UpdateProjectDto {
  readonly title: string;
  readonly description: string;
  readonly id: string;
}
