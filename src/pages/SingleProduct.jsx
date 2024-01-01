import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

import { customFetch, formatPrice, generateAmountInputs } from "../utils";

export const loader = async ({ params }) => {
  const { id } = params;
  const response = await customFetch.get(`/products/${id}`);
  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, company, price, description, colors } =
    product.attributes;
  const dollarsAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (event) => {
    setAmount(parseInt(event.target.value));
  };

  return (
    <section>
      {/* BREADCRUMBS */}
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-x-16 gap-y-8 lg:grid-cols-2">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="h-96 w-96 rounded-lg object-cover lg:w-full"
        />
        {/* INFO */}
        <div>
          <h1 className="text-3xl font-bold capitalize">{title}</h1>
          <h4 className="mt-2 text-xl font-bold text-neutral-content">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* COLORS */}
          <div className="mt-6">
            <h4 className="font-medium capitalize tracking-wider">colors</h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    className={`badge mr-2 h-6 w-6 ${
                      color === productColor && "border-2 border-secondary"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      setProductColor(color);
                    }}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* AMOUNT */}
          <div className="form-control w-full max-w-xs">
            <label
              htmlFor="amount"
              className="label pl-0 font-medium capitalize tracking-wider"
            >
              amount
            </label>
            <select
              className="select select-bordered select-secondary font-medium"
              id="amount"
              onChange={handleAmount}
              value={amount}
            >
              {generateAmountInputs(20)}
            </select>
          </div>
          {/* ADD TO CART */}
          <div className="mt-10">
            <button
              className="btn btn-secondary uppercase"
              onClick={() => {
                console.log("Add to Bag");
              }}
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
