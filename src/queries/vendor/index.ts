import { useQuery } from "react-query";
import getVendor from "@/model/vendor";

const useFetchVendor = () =>
  useQuery(["fetchVendor"], getVendor, {
    refetchOnMount: true,
    staleTime: Infinity,
    cacheTime: 0,
  });

export default useFetchVendor;
