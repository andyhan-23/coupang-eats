import { useQuery } from "react-query";
import fetchData from "./fetch-data";

const getData = (key: string, path: string) => {
  return useQuery([key, path], () => fetchData(path));
};

export default getData;
