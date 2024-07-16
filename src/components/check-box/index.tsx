import { useState } from "react";
import { useDispatch } from "react-redux";
import { checkBox } from "@/store/menu";

type CheckBoxType = {
  name: string;
  price: number;
};
const CheckBox = (props: CheckBoxType) => {
  const { name, price } = props;
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const handleChange = () => {
    setIsChecked(!isChecked);
    const checkStatus = {
      check: !isChecked,
      price: price,
      name: name,
    };
    dispatch(checkBox(checkStatus));
  };
  return (
    <div className="flex items-center gap-10 p-4">
      <input
        type="checkbox"
        className="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        checked={isChecked}
        onChange={handleChange}
      />
      <p className="text-lg">{name}</p>
      <p className="text-lg">(+{price}원)</p>
    </div>
  );
};

export default CheckBox;
