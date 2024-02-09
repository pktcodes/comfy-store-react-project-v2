import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

import { customFetch } from "../utils";

export const loader =
  (store) =>
  async ({ request }) => {
    const { user } = store.getState().userState;

    if (!user) {
      toast.warn("You must be logged in to view orders");
      return redirect("/login");
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

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
  return (
    <div className="p-6 text-center text-4xl font-bold underline">Orders</div>
  );
};

export default Orders;
