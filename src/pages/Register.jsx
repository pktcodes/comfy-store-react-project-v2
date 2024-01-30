import { Form, Link, redirect } from "react-router-dom";
import { toast } from "react-toastify";

import { FormInput, SubmitButton } from "../components";
import { customFetch } from "../utils";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const inputData = Object.fromEntries(formData);

  try {
    const response = await customFetch.post("/auth/local/register", inputData);
    console.log(response);
    toast.success("Account created successfully");
    return redirect("/login");
  } catch (error) {
    console.log(error);
    const errorMessage =
      error?.response?.data?.error?.message || "Please verify the credentials";
    toast.error(errorMessage);
    return null;
  }
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
