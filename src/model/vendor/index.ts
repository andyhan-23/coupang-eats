import loadData from "../load-data";
import URL from "../constant";
import { AxiosResponse } from "axios";
import { VendorDataT } from "../types/index";

const loadDataDelayed = () => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const data = await loadData(URL.vendor);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }, 3000); // 3초 후에 데이터를 받아옴
  });
};

const getVendor = async (): Promise<any> => {
  const response: AxiosResponse<VendorDataT> = await loadData(URL.vendor);
  return response.data.store1;
};

export default getVendor;
