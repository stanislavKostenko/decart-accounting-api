export enum ValidationType {
  MaxLength = 'maxLength',
  MinLength = 'minLength',
}

export const messages = (type: string) => {
  switch (type) {
    case ValidationType.MaxLength:
      return `$property is too long. Maximum length is $constraint1 characters.`;
    case ValidationType.MinLength:
      return `$property is too short. Minimum length is $constraint1 characters.`;
    default:
      return;
  }
};
