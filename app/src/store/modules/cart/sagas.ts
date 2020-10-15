import { all, takeLatest, select } from "redux-saga/effects";

import { addProdutctToCartRequest } from "./actions";
import { IState } from "../..";

type checkProductStockRequest = ReturnType<typeof addProdutctToCartRequest>;

function* checkProductStock({ payload }: checkProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return (
      state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0
    );
  });

  console.log(currentQuantity);
}

export default all([
  takeLatest("ADD_PRODUCT_TO_CART_REQUEST", checkProductStock),
]);
