import { Link, useLoaderData } from "react-router-dom";

import { formatPrice } from "../utils";

const ProductsGrid = () => {
  const { products } = useLoaderData();

  return (
    <div className="grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { image, title, price } = product.attributes;
        const dollarsAmount = formatPrice(price);

        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="card w-full bg-base-100 shadow-xl transition duration-300 hover:shadow-2xl"
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="h-64 w-full rounded-lg object-cover md:h-48"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <p className="text-secondary">{dollarsAmount}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
