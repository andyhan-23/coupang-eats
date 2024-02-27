import { RestRequest } from "msw";

export type MethodT = "get" | "post" | "put" | "delete";

export type MenuDataT = {
  id: string;
  name: string;
  type: string;
  price: {
    defaultPrice: number;
    salePrice?: number;
  };
  imageSrc?: string;
  quantity: number;
  refId?: string[];
  required?: number;
};

export type VendorDataT = {
  id: string;
  name: string;
  address: string;
  phoneNumber: string;
};

export type DataT =
  | Record<string, MenuDataT>
  | undefined
  | Record<string, VendorDataT>;

export type CallBackType = (
  req: RestRequest,
  data: DataT
) => DataT | MenuDataT | VendorDataT | undefined;
