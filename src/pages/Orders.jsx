import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

import { OrdersList, PaginationContainer, SectionTitle } from "../components";
import { customFetch } from "../utils";

export const loader = (store) => async () => {
  const { user } = store.getState().userState;

  if (!user) {
    toast.warn("You must be logged in to view orders");
    return redirect("/login");
  }

  try {
    const response = await customFetch.get("/orders", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return { orders: response.data.data, meta: response.data.meta };
  } catch (error) {
    console.log(error);
    const errorMessage =
      error?.response?.data?.error?.message ||
      "There was an error fetching your orders";
    if (error.response.status === 401 || error.response.status === 403) {
      return redirect("/login");
    }
    return toast.error(errorMessage);
  }
};

const Orders = () => {
  const { meta } = useLoaderData();

  // if (orders < 1) {
  //   return <SectionTitle text="Please make an order " />;
  // }

  /* Alternative - Approach */
  if (meta.total < 1) {
    return <SectionTitle text="Please make an order " />;
  }

  return (
    <>
      <SectionTitle text="Your Orders" />
      <OrdersList />
      <PaginationContainer />
    </>
  );
};

export default Orders;
