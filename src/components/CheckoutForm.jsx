import { Form } from "react-router-dom";

import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";

const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="text-xl font-semibold capitalize">shipping information</h4>
      <FormInput label="name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <div className="mb-8 mt-4">
        <SubmitButton text="place your order" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
