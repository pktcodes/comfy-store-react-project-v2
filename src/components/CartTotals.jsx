import { useSelector } from "react-redux";

import { formatPrice } from "../utils";

const CartTotals = () => {
  const { subtotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState,
  );

  return (
    <div className="card bg-base-200">
      <div className="card-body">
        <p className="flex justify-between border-b border-base-300 pb-2 text-xs">
          <span>Subtotal</span>
          <span className="font-medium">{formatPrice(subtotal)}</span>
        </p>
        <p className="flex justify-between border-b border-base-300 pb-2 text-xs">
          <span>Shipping</span>
          <span className="font-medium">{formatPrice(shipping)}</span>
        </p>
        <p className="flex justify-between border-b border-base-300 pb-2 text-xs">
          <span>Tax</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </p>
        <p className="flex justify-between pt-2 text-sm">
          <span>Order Total</span>
          <span className="font-medium">{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
};

export default CartTotals;
