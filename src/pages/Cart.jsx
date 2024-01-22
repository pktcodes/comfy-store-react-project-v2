import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { CartItemsList, CartTotals, SectionTitle } from "../components";

const Cart = () => {
  const isUserLoggedIn = null;

  const numberOfItemsInCart = useSelector(
    (state) => state.cartState.numberOfItemsInCart,
  );

  if (numberOfItemsInCart === 0) {
    return <SectionTitle text="You cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        {/* CART ITEMS */}
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        {/* CART TOTALS */}
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {isUserLoggedIn ? (
            <Link
              to="/checkout"
              className="btn btn-primary btn-block mt-8 uppercase"
            >
              proceed to checkout
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary btn-block mt-8 uppercase"
            >
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
