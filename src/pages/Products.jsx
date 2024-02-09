import { PaginationContainer, ProductsContainer, Filters } from "../components";

import { customFetch } from "../utils";

const productsUrl = "/products";

export const loader = async ({ request }) => {
  /* Alternative - Approach */
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch.get(productsUrl, {
    params: params,
  });

  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;

/*  
=====================================
Manual Approach - to get query params
=====================================
*/

// const params = new URL(request.url).searchParams;
// const search = params.get("search");
// const category = params.get("category");
// const company = params.get("company");
// const order = params.get("order");
// const price = params.get("price");
// const shipping = params.get("shipping");
// const queryParams = { search, category, company, order, price, shipping };
