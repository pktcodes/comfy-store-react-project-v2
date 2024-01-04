import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsGrid = () => {
  const { products } = useLoaderData();

  return (
    <div className="mt-12 grid gap-y-4">
      {products.map((product) => {
        const { image, title, price, company } = product.attributes;
        const dollarsAmount = formatPrice(price);

        return (
          <Link
            key={product.id}
            className="group flex flex-col flex-wrap gap-y-4 rounded-lg bg-base-100 p-8 shadow-xl transition duration-300 hover:shadow-2xl sm:flex-row"
            to={`/products/${product.id}`}
          >
            <img
              src={image}
              alt={title}
              className="h-24 w-24 rounded-lg object-cover transition duration-300 group-hover:scale-105 sm:h-32 sm:w-32"
            />
            <div className="ml-0 sm:ml-10">
              <h3 className="text-lg font-medium capitalize">{title}</h3>
              <h4 className="text-base capitalize text-neutral-content">
                {company}
              </h4>
            </div>
            <p className="ml-0 text-lg font-medium sm:ml-auto">
              {dollarsAmount}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
