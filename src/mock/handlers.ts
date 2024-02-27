import { rest } from "msw";
import { MethodT, CallBackType, DataT } from "./type";

const handlers = (
  method: MethodT,
  path: string,
  data: DataT,
  callback: CallBackType
) => rest[method](path, (req, res, ctx) => res(ctx.json(callback(req, data))));

export default handlers;
