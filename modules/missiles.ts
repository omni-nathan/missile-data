import { ZuploContext, ZuploRequest } from "@zuplo/runtime";
// Importing the local JSON file containing the missile data
import missiles from "../missiles.json";

export default async function (request: ZuploRequest, context: ZuploContext) {
  /**
   * Log the request for visibility in the Zuplo portal.
   */
  context.log.info(`Fetching missile data list.`);

  /**
   * Return the missile data as a JSON response. 
   * Zuplo automatically sets the content-type to application/json.
   */
  return missiles;
}
