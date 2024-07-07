import { PropsWithChildren } from "react";

const AppUi = ({ children }: PropsWithChildren) => {
  return <div className="max-w-lg min-h-screen m-auto ">{children}</div>;
};

export default AppUi;
