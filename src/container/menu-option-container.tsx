import { useFetchSide } from "@/queries/menu";
import { useFetchSub } from "@/queries/menu";
import RadioButton from "@/components/radio-button";
import CheckBox from "@/components/check-box";
import { useSelector } from "react-redux";

type MenuOptionContainerTypes = {
  id: string | undefined;
};
type RadioButtonType = {
  name: string;
  price: {
    defaultPrice: number;
    salePric: number;
  };
  id: string;
  refId: string[];
  required: number;
};

type CheckBoxType = {} & RadioButtonType;

const MenuOptionContainer = (props: MenuOptionContainerTypes) => {
  const { id } = props;
  const subMenuArr: any = useFetchSub();
  const sideMenuArr: any = useFetchSide();
  const isRed = useSelector((state: any) => state.menu.isRed);
  return (
    <div>
      <div className="my-8 border-1 rounded-lg overflow-x-hidden shadow-lg">
        <div
          className={
            isRed
              ? `text-lg text-red-500 font-bold m-4`
              : `text-lg text-black font-bold m-4`
          }
        >
          필수
        </div>
        {subMenuArr?.map((value: RadioButtonType) => {
          const isInclude = value.refId.includes(id as string);
          if (isInclude) {
            return (
              <RadioButton
                key={value.id}
                name={value.name}
                price={value.price.defaultPrice}
              />
            );
          }
        })}
      </div>
      <div className="my-8 border-1 rounded-lg overflow-x-hidden shadow-lg">
        <div className="text-lg font-bold m-4">선택</div>
        {sideMenuArr?.map((value: CheckBoxType) => {
          const isInclude = value.refId.includes(id as string);
          if (isInclude) {
            return (
              <CheckBox
                key={value.id}
                name={value.name}
                price={value.price.defaultPrice}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default MenuOptionContainer;
