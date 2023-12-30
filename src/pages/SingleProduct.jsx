import { Link, useLoaderData } from "react-router-dom";

import { customFetch, formatPrice } from "../utils";

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
  return (
    <section>
      {/* BREADCRUMBS */}
      <div className="text-md breadcrumbs">
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
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
