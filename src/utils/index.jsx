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

const generateAmountInputs = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};

export { customFetch, formatPrice, generateAmountInputs };
