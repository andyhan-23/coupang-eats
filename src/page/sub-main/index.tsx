import Header from "@/components/header";
import { useState } from "react";

const SubMainPage = (props) => {
  const { storeId, isError, storeName } = props;

  const [arr, setArr] = useState([]);

  if (isError) return <div>에러 </div>;
  else {
    // console.log("id", storeId);
    // console.log("name", storeName);
  }
};

export default SubMainPage;
