import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

import {
  ComplexPaginationContainer,
  OrdersList,
  SectionTitle,
} from "../components";
import { customFetch } from "../utils";

const ordersQuery = (params, user) => {
  return {
    queryKey: [
      "orders",
      params.page ? parseInt(params.page) : 1,
      user.username,
    ],
    queryFn: () =>
      customFetch.get("/orders", {
        params: params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const { user } = store.getState().userState;

    if (!user) {
      toast.warn("You must be logged in to view orders");
      return redirect("/login");
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    console.log(user);
    try {
      const response = await queryClient.ensureQueryData(
        ordersQuery(params, user),
      );
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
      <ComplexPaginationContainer />
    </>
  );
};

export default Orders;
