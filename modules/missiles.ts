import { ZuploContext, ZuploRequest } from "@zuplo/runtime";
import missiles from "../missiles.json";

export default async function (request: ZuploRequest, context: ZuploContext) {
  const { searchParams } = new URL(request.url);
  const manufacturer = searchParams.get("manufacturer");
  
  // Get the ID from the URL path (e.g., /missiles/aim-9x)
  const id = request.params.id;

  // If an ID is provided, return just that one missile
  if (id) {
    const missile = missiles.find(m => m.id.toLowerCase() === id.toLowerCase());
    return missile || new Response("Missile not found", { status: 404 });
  }

  // If a manufacturer query is provided, filter the list
  if (manufacturer) {
    return missiles.filter(m => 
      m.manufacturer.toLowerCase().includes(manufacturer.toLowerCase())
    );
  }

  // Otherwise return everything
  return missiles;
}
