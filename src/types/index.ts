export interface ITable  {
  id: string;
  name: string;
}

export interface IOrder {
  id: string;
}

export type ILink = {
  id: number;
  name: string;
  path: string;
  icon: string;
  items?: {
    id: number;
    name: string;
    path: string;
  }[];
}[];
