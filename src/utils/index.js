import axios from "axios";

const url = "https://strapi-store-server.onrender.com/api";

const customFetch = axios.create({
  baseURL: url,
});

export { customFetch };
