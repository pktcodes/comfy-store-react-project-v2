import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import { BsFillGridFill, BsList } from "react-icons/bs";

import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;

  const [layout, setLayout] = useState("grid");

  const setActiveStyles = (pattern) => {
    return `btn btn-circle btn-sm text-xl ${
      pattern === layout ? "btn-primary" : "btn-ghost"
    }`;
  };

  return (
    <>
      {/* HEADER */}
      <div className="mt-8 flex items-center justify-between border-b border-base-300 pb-5">
        <h4 className="text-base font-medium">
          {totalProducts} product{totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            className={setActiveStyles("grid")}
            onClick={() => setLayout("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            className={setActiveStyles("list")}
            onClick={() => setLayout("list")}
          >
            <BsList />
          </button>
        </div>
      </div>

      {/* PRODUCTS */}
      <div>
        {totalProducts < 1 ? (
          <h5 className="mt-16 text-center text-2xl">
            Sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
