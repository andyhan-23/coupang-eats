import loadData from "../load-data";
import URL from "../constant";

const loadDataDelayed = () => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const data = await loadData(URL.menuList);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }, 1000); // 3초 후에 데이터를 받아옴
  });
};

const getMenuList = async () => {
  const data = await loadData(URL.menuList);
  return data;
};

export default getMenuList;
