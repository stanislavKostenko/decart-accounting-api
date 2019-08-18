import { FindOneParams } from '../classes/general-validation.class';

export interface CategoryInterface {
  title: string;
  description: string;
  works: WorksInterface[];
  createdDate?: string;
  updatedDate?: string;
  id?: string;
  _id?: string;
}

export interface WorksInterface {
  title: string;
  units: string;
  categoryId: FindOneParams;
  createdDate?: string;
  updatedDate?: string;
}
