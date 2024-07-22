import axios from "axios";

export const bitMexApi = axios.create({
  baseURL: "https://www.bitmex.com/api/v1",
});
