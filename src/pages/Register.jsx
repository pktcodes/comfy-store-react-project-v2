import { Form, Link } from "react-router-dom";

import { FormInput, SubmitButton } from "../components";

export const action = () => {
  return null;
};

const Register = () => {
  return (
    <section className="grid h-screen place-items-center">
      <Form
        method="POST"
        className="card  w-96 gap-y-4 bg-base-100 p-8 shadow-lg"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput label="username" type="text" name="username" />
        <FormInput label="email" type="email" name="email" />
        <FormInput label="password" type="password" name="password" />
        <div className="mt-4">
          <SubmitButton text="register" />
        </div>
        <p className=" text-center">
          Already a member?
          <span className="ml-2">
            <Link
              to="/login"
              className="link-hover link link-primary capitalize"
            >
              login
            </Link>
          </span>
        </p>
      </Form>
    </section>
  );
};

export default Register;
