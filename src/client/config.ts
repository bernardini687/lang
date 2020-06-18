import { config } from "../deps.ts";

export function runConfig() {
  if (Deno.env.get("DENO_ENV") === "test") {
    config({ path: `${Deno.cwd()}/.env.test`, export: true });
  } else {
    config({ export: true });
  }
}
