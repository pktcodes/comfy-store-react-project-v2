import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { FormInput, SubmitButton } from "../components";
import { loginUser } from "../features/user/userSlice";
import { customFetch } from "../utils";
import { useDispatch } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const inputData = Object.fromEntries(formData);

    try {
      const response = await customFetch.post("/auth/local", inputData);
      store.dispatch(loginUser(response.data));
      toast.success("You have logged in successfully");
      return redirect("/");
    } catch (error) {
      const errorMessage = error?.response?.data?.error?.message;
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginAsGuestUser = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      navigate("/");
      toast.success("Welcome, Guest User");
    } catch (error) {
      console.log(error);
      toast.error("Guest User Login Error. Please try again");
    }
  };

  return (
    <section className="grid h-screen place-items-center ">
      <Form
        method="POST"
        className="card w-96 gap-y-4 bg-base-100 p-8 shadow-lg"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput label="email" type="email" name="identifier" />
        <FormInput label="password" type="password" name="password" />
        <div className="mt-4">
          <SubmitButton text="login" />
        </div>
        <button
          type="button"
          className="btn btn-secondary uppercase"
          onClick={handleLoginAsGuestUser}
        >
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
