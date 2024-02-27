import axios from "axios";

const fetchData = async (path: string) => {
  const response = await axios.get(path);
  return response.data;
};

export default fetchData;
