import { TProduct } from "./product.types";

export type TOrderItem = {
  id: number;
  orderItems: TProduct[];
  subTotal: number;
};
