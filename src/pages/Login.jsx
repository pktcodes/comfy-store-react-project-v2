import { Form, Link } from "react-router-dom";

import { FormInput, SubmitButton } from "../components";

export const action = () => {
  console.log("Action");
  return null;
};

const Login = () => {
  return (
    <section className="grid h-screen place-items-center ">
      <Form
        method="POST"
        className="card w-96 gap-y-4 bg-base-100 p-8 shadow-lg"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          label="email"
          type="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          label="password"
          type="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitButton text="login" />
        </div>
        <button type="button" className="btn btn-secondary uppercase">
          guest user
        </button>
        <p className="text-center capitalize">
          not a member yet?
          <Link to="/register" className="link-hover link link-primary ml-2">
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
