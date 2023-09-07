import axios from "axios";

export const getShoesList = async (cnt: number) => {
  const res = await axios.get(`http://localhost:8080/shoesList/${cnt}`);
  return res.data;
};
