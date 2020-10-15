import { IProduct } from "./types";

export function addProdutctToCartRequest(product: IProduct) {
  return {
    type: "ADD_PRODUCT_TO_CART_REQUEST",
    payload: {
      product,
    },
  };
}

export function addProdutctToCartSuccess(product: IProduct) {
  return {
    type: "ADD_PRODUCT_TO_CART_SUCCESS",
    payload: {
      product,
    },
  };
}

export function addProdutctToCartFailure(productId: number) {
  return {
    type: "ADD_PRODUCT_TO_CART_FAILURE",
    payload: {
      productId,
    },
  };
}
