export interface CategoryInterface {
  title: string;
  description: string;
  works: WorksInterface[];
  createdDate?: string;
  updatedDate?: string;
}

export interface WorksInterface {
  title: string;
  costPerItem: number;
  units: string;
  repeats: boolean;
  categoryId: string;
  createdDate?: string;
  updatedDate?: string;
}
