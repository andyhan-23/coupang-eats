import { useDispatch } from "react-redux";
import { radioButton } from "@/store/menu";

type RadioButtonPropsType = {
  name: string;
  price: number;
};
const RadioButton = (props: RadioButtonPropsType) => {
  const { name, price } = props;

  const dispatch = useDispatch();
  const handleChange = () => {
    const subMenuObj = {
      name: name,
      price: price,
      isChecked: true,
    };
    dispatch(radioButton(subMenuObj));
  };
  return (
    <div className="flex items-center p-4 gap-10">
      <input
        type="radio"
        name="default-radio-1"
        value=""
        onChange={handleChange}
        className="w-8 h-8 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
      />
      <p className="text-lg">{name}</p>
      <p className="text-lg">(+{price}원)</p>
    </div>
  );
};

export default RadioButton;
