import { ArrowRight, TimerIcon } from "@/assets/icons";
import { useNavigate } from "react-router-dom";
import useFormatNumber from "@/hooks/use-format-number";

type SideBarProps = {
  deliveryFee: string;
  minimunOrderAmount: number;
};

const SideBar = ({ deliveryFee, minimunOrderAmount }: SideBarProps) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/storeinfo");
  };

  return (
    <div className="bg-white w-full p-4 text-black">
      <div className="flex flex-col items-start w-full">
        <div className="flex justify-between w-full mb-4">
          <div className="flex items-center">
            <TimerIcon />
            <h1 className="ml-2 font-bold">도착 까지 약 35분</h1>
          </div>
          <div className="flex items-center cursor-pointer" onClick={onClick}>
            <h1 className="mr-2">매장 정보</h1>
            <ArrowRight />
          </div>
        </div>
        <div className="flex gap-x-6 mb-2">
          <h1>최소주문</h1>
          <h1>{useFormatNumber(minimunOrderAmount)}원</h1>
        </div>
        <div className="flex gap-x-6">
          <h1>배달비</h1>
          <h1 className="font-bold">{deliveryFee}</h1>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
