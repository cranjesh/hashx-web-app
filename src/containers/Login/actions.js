import { SETUP_SESSION } from "../../state/actionTypes";

export function setupUserSession(payload) {
  return { type: SETUP_SESSION, payload };
}