import { PropsWithChildren } from "react";

const UI = ({ children }: PropsWithChildren) => (
  <div className="bg-white">{children}</div>
);

export default UI;
