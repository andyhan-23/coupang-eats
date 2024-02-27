import { useQuery } from "react-query";
import getVendor from "@/model/vendor";

const useFetchVendor = () =>
  useQuery(["fetchVendor"], getVendor, {
    refetchOnMount: false,
    staleTime: Infinity,
    cacheTime: 10000,
  });

export default useFetchVendor;
