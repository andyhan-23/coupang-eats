import vendorJSON from "./__fixtures__/vendor.json";
import menuJSON from "./__fixtures__/menu.json";
import { MenuDataT, VendorDataT } from "./type";

const getData = (
  target: string
): Record<string, MenuDataT> | Record<string, VendorDataT> | undefined => {
  try {
    switch (target) {
      case "vendor":
        return vendorJSON;
      case "menu":
        return menuJSON;
      default:
        throw new Error("No data");
    }
  } catch (error) {
    if (import.meta.env.DEV) console.error(error);
  }
};

export default getData;
