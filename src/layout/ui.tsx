import { PropsWithChildren } from "react";

const UI = ({ children }: PropsWithChildren) => (
  <div className="bg-slate-300">{children}</div>
);

export default UI;
