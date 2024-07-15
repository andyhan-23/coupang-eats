import pizza1 from "@/images/pizza.png";

type HeaderPropsType = {
  name: string;
};

const Header = ({ name }: HeaderPropsType) => {
  return (
    <>
      <div className="relative w-full h-96">
        <img src={pizza1} alt="pizza1_logo" className="absolute w-full " />
        <div className="absolute w-3/4 h-36 bg-white m-auto shadow-2xl z-10 left-0 right-0 top-70  bottom-0 flex items-center justify-center">
          <h1 className="text-5xl text-center font-bold">{name}</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
