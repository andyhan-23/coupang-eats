import axios from "axios";
import initMocks from "@/mock";
import URL from "./constant";

type configType = {
  url: string;
};

const instnce = axios.create({
  baseURL: URL.base,
});

const splitUrl = (config: configType) => {
  let tempUrl = config.url.split("/");
  return `/${tempUrl[1]}`;
};

instnce.interceptors.request.use(config => {
  const currentUrl = splitUrl(config);

  if (
    URL.vendor === currentUrl ||
    URL.menuList === currentUrl ||
    URL.menu === currentUrl
  ) {
    //initMocks();
    config.baseURL = null;
  } else throw new Error(`${config.url}는 잘못된 요청입니다.`);
  return config;
});

instnce.interceptors.response.use(async response => {
  try {
    const result = await response.data;
    if (!result) throw new Error("데이터가 없습니다.");
    return result;
  } catch (error) {
    const currentUrl = splitUrl(response.config);
    if (import.meta.env.DEV) {
      if (URL.vendor === currentUrl)
        console.error(
          `${URL.vendor}요청에 대한 응답을 받는 도중 에러 발생:${error}`
        );
      else if (URL.menuList === currentUrl)
        console.error(
          `${URL.menuList}요청에 대한 응답을 받는 도중 에러 발생:${error}`
        );
      else if (URL.menu === currentUrl)
        console.error(
          `${URL.menu}요청에 대한 응답을 받는 도중 에러 발생:${error}`
        );
    }
    return null;
  }
});

export default instnce;
