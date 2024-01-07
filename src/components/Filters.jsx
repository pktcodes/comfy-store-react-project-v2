import { Form, Link, useLoaderData } from "react-router-dom";

import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";

const Filters = () => {
  const { meta } = useLoaderData();

  return (
    <Form className="grid items-center gap-x-4 gap-y-8 rounded-md bg-base-200 px-8 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
      />
      {/* CATEGORIES*/}
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
      />
      {/* COMPANIES */}
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
      />
      {/* ORDER */}
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
      />
      {/* PRICE */}
      <FormRange label="select price" name="price" size="range-sm" />
      {/* BUTTONS */}
      <button className="btn btn-primary btn-sm uppercase" type="submit">
        search
      </button>
      <Link
        to="/products"
        className="text- btn btn-accent btn-sm uppercase text-primary-content"
      >
        reset
      </Link>
    </Form>
  );
};

export default Filters;
