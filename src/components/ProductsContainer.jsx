import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";

const ProductsContainer = () => {
  return (
    <section>
      <ProductsList />
      <ProductsGrid />
    </section>
  );
};

export default ProductsContainer;
