import { Heading } from "@components/common";
import { Loading, LottieHandler } from "@components/feedback";
import { CartItemList, CartSubtotalPrice } from "@components/eCommerce";
import useCart from "@hooks/useCart";

const Cart = () => {
  const {
    loading,
    error,
    products,
    userAccessToken,
    placeOrderStatus,
    changeQuantityHandler,
    removeItemHandler,
  } = useCart();
  return (
    <>
      <Heading title="Your Cart" />
      <Loading status={loading} error={error} type="cart">
        {products.length ? (
          <>
            <CartItemList
              products={products}
              changeQuantityHandler={changeQuantityHandler}
              removeItemHandler={removeItemHandler}
            />
            <CartSubtotalPrice
              products={products}
              userAccessToken={userAccessToken}
            />
          </>
        ) : placeOrderStatus === "succeeded" ? (
          <LottieHandler
            message="Your order has been placed successfully"
            type="success"
          />
        ) : (
          <LottieHandler message="Your cart is empty" type="empty" />
        )}
      </Loading>
    </>
  );
};

export default Cart;
