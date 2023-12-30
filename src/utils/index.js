import axios from "axios";

const url = "https://strapi-store-server.onrender.com/api";

const customFetch = axios.create({
  baseURL: url,
});

const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};

export { customFetch, formatPrice };
