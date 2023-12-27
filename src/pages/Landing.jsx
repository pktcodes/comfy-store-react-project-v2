import { Hero } from "../components";
import { customFetch } from "../utils";

const featuredProductsUrl = "/products?featured=true";

export const loader = async () => {
  const response = await customFetch.get(featuredProductsUrl);
  const featuredProducts = response.data.data;
  console.log(featuredProducts);
  return { featuredProducts };
};

const Landing = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Landing;
