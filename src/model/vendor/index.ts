import loadData from "../load-data";
import URL from "../constant";

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

const getVendor = async () => {
  const { store1 } = await loadData(URL.vendor);
  return store1;
};

export default getVendor;
