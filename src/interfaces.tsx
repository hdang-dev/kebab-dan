// Product
export enum ProductType {
  BREAD = "bread",
  SKEWER = "skewer",
  ROLL = "roll",
  SALAD = "salad",
}

export enum ProductStatus {
  AVAILABLE = "available",
  SOLDOUT = "soldOut",
}

export interface IProduct {
  type: ProductType;
  name: string;
  desciption: string;
  price: number;
  status: ProductStatus;
}

// Order
export enum OrderStatus {
  PROGRESSING = "progressing",
  SHIPPING = "shipping",
  ARCHIVED = "archived",
  CANCELED = "canceled",
}

export interface IOrder {
  id: number;
  detailList: ICartItem[];
  totalQuantity: number;
  totalPrice: number;
  time: string;
  note: string;
  address: string;
  phone: string;
  status: OrderStatus;
}

// Cart
export interface ICartItem {
  product: IProduct;
  quantity: number;
}
