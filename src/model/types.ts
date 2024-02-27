export {};

type menuType = "main" | "sub" | "side";

type price = {
  defaultPrice: number;
  salePrice?: number;
};

type operatingTime = {
  opengingHours: string;
  closingHours: string;
};

type menuT = {
  id: string;
  name: string;
  type: menuType;
  refId?: string;
  price: price;
  imageSrc?: string;
  quantity: number;
  maxCount?: number;
  minCount?: number;
};

type storeT = {
  id: string;
  name: string;
  operatingTime: operatingTime;
  phoneNumber: string;
};
