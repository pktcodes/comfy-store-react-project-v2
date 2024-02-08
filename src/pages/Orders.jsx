import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const loader = (store) => async () => {
  const { user } = store.getState().userState;

  if (!user) {
    toast.warn(
      "You must be logged in to view ordersPlease login to access orders",
    );
    return redirect("/login");
  }

  return null;
};

const Orders = () => {
  return (
    <div className="p-6 text-center text-4xl font-bold underline">Orders</div>
  );
};

export default Orders;
