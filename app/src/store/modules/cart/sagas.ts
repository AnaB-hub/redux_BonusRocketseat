import { all, takeLatest, select, call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import {
  addProdutctToCartRequest,
  addProdutctToCartSuccess,
  addProdutctToCartFailure,
} from "./actions";
import { IState } from "../..";
import api from "../../../services/api";
import { ActionTypes } from "./types";

type checkProductStockRequest = ReturnType<typeof addProdutctToCartRequest>;

interface IStockResponse {
  id: number;
  quantity: number;
}

function* checkProductStock({ payload }: checkProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return (
      state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0
    );
  });

  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(
    api.get,
    `stock/${product.id}`
  );

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProdutctToCartSuccess(product));
  } else {
    yield put(addProdutctToCartFailure(product.id));
  }
}

export default all([
  takeLatest(ActionTypes.addProductToCartRequest, checkProductStock),
]);
