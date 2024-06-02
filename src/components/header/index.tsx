import { Link } from "react-router-dom";

type HeaderPropsType = {
  name: string;
};

const Header = ({ name }: HeaderPropsType) => {
  return (
    <>
      <Link to="/">
        <h1 className="text-5xl text-center bg-white font-bold p-2 sticky top-0 z-50 ">
          {name}
        </h1>
      </Link>
    </>
  );
};

export default Header;
