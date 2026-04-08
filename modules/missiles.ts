import { ZuploContext, ZuploRequest } from "@zuplo/runtime";
import missiles from "../missiles.json";

export default async function (request: ZuploRequest, context: ZuploContext) {
  const { searchParams } = new URL(request.url);
  const manufacturer = searchParams.get("manufacturer");

  if (manufacturer) {
    return missiles.filter(m => 
      m.manufacturer.toLowerCase().includes(manufacturer.toLowerCase())
    );
  }

  return missiles;
}
