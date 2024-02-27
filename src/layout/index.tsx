import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative border border-solid border-black p-4 md:max-w-md mx-auto">
      {children}
    </div>
  );
};

export default Layout;
