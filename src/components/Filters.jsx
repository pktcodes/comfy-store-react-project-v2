import { Form, Link } from "react-router-dom";

import FormInput from "./FormInput";

const Filters = () => {
  return (
    <Form className="grid items-center gap-x-8 gap-y-4 rounded-md bg-base-200 px-8 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
      />
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
