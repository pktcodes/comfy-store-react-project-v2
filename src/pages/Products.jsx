import { PaginationContainer, ProductsContainer, Filters } from "../components";

import { customFetch } from "../utils";

const productsUrl = "/products";

/* Alternative Approach */
// const allProductsQuery = (params) => {
//   return {
//     queryKey: ["products", params],
//     queryFn: () => customFetch.get(productsUrl, { params: params }),
//   };
// };

const allProductsQuery = (queryParams) => {
  const { search, category, company, order, price, shipping, page } =
    queryParams;

  return {
    queryKey: [
      "products",
      search ?? "",
      category ?? "all",
      company ?? "all",
      order ?? "a-z",
      price ?? "100000",
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () =>
      customFetch.get(productsUrl, {
        params: queryParams,
      }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    /* Alternative - Approach */
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    console.log(params);
    const response = await queryClient.ensureQueryData(
      allProductsQuery(params),
    );

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
