import { useLoaderData } from "react-router-dom";

import { customFetch } from "../utils";

export const loader = async ({ params }) => {
  const { id } = params;
  const response = await customFetch.get(`/products/${id}`);
  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  console.log(product);
  return (
    <div className="p-6 text-center text-4xl font-bold underline">
      Single Product
    </div>
  );
};

export default SingleProduct;
