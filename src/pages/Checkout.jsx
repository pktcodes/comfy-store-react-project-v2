import { useSelector } from "react-redux";

import { CartTotals, CheckoutForm, SectionTitle } from "../components";

const Checkout = () => {
  const numberOfItemsInCart = useSelector(
    (state) => state.cartState.numberOfItemsInCart,
  );

  if (numberOfItemsInCart === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid sm:gap-8 md:grid-cols-2">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};

export default Checkout;
