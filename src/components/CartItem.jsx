import PropTypes from "prop-types";

import { useDispatch } from "react-redux";

import { editItem, removeItem } from "../features/cart/cartSlice";
import { formatPrice, generateAmountInputs } from "../utils";

const CartItem = ({ cartItem }) => {
  const { cartID, image, title, company, productColor, amount, price } =
    cartItem;

  const dispatch = useDispatch();

  const handleAmount = (event) => {
    dispatch(editItem({ cartID, amount: parseInt(event.target.value) }));
  };

  const handleRemoveItemFromCart = () => {
    dispatch(removeItem({ cartID }));
  };

  return (
    <article className="mb-12 flex flex-col flex-wrap gap-y-4 border-b border-base-300 pb-6 last:border-b-0 sm:flex-row">
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg object-cover sm:h-32 sm:w-32"
      />
      {/* INFO */}
      <div className="sm:ml-16 sm:w-48">
        {/* TITLE */}
        <h3 className="font-medium capitalize">{title}</h3>
        {/* COMPANY */}
        <h4 className="mt-2 text-sm capitalize text-neutral-content">
          {company}
        </h4>
        {/* COLOR */}
        <p className="mt-4 flex items-center gap-x-2 text-sm capitalize">
          color:
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-24">
        {/* AMOUNT */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            id="amount"
            name="amount"
            className="select select-bordered select-ghost select-xs mt-2"
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountInputs(amount + 5)}
          </select>
        </div>
        {/* REMOVE */}
        <button
          className="link-hover link link-primary mt-2 text-sm"
          onClick={handleRemoveItemFromCart}
        >
          remove
        </button>
      </div>
      {/* PRICE */}
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object,
};

export default CartItem;
