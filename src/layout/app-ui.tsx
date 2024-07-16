import { PropsWithChildren } from "react";

const AppUi = ({ children }: PropsWithChildren) => {
  return <div className="max-w-lg max-h-1 m-auto ">{children}</div>;
};

export default AppUi;
