import instance from "./api";

export const getData = () => instance.get(`/products/.json`)