import axios from "axios";

const url = "https://strapi-store-server.onrender.com/api";

const customFetch = axios.create({
  baseURL: url,
});

const formatPrice = (cents) => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((cents / 100).toFixed(2));
  return dollarsAmount;
};

export { customFetch, formatPrice };
