export interface Project {
  title: string;
  description: string;
  id: string;
  address: Address;
  archived: boolean;
  square: number;
}

export interface Address {
  city: string;
  street: string;
  houseNumber: number;
  flatNumber: number;
}
