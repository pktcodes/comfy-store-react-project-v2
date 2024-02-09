import { useLoaderData } from "react-router-dom";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

const OrdersList = () => {
  const { orders, meta } = useLoaderData();

  return (
    <div className="mt-8">
      <h4 className="mb-4 capitalize">
        total orders : {meta.pagination.pageCount}
      </h4>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* Table Header */}
          <thead>
            <tr>
              <td>Name</td>
              <td>Address</td>
              <td>Products</td>
              <td>Cost</td>
              <td className="hidden sm:table-cell">Date</td>
            </tr>
          </thead>
          {/* Table Data */}
          <tbody>
            {orders.map((order) => {
              const id = order.id;
              const { name, address, numItemsInCart, orderTotal, createdAt } =
                order.attributes;
              const date = dayjs(createdAt).format("hh:mm a - MMM Do, YYYY");
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{address}</td>
                  <td>{numItemsInCart}</td>
                  <td>{orderTotal}</td>
                  <td className="hidden sm:table-cell">{date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersList;
