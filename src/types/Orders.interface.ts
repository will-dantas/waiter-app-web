export interface IIngredients {
  _id: string;
  name: string;
}

export interface IProductList {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: IIngredients[];
}

export interface IProducts {
  _id: string;
  product: IProductList;
  quantity: number;
}

export interface IOrder {
  _id: string;
  table: string;
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
  products: IProducts[];
}
