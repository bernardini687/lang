import { runConfig } from "./config.ts";

runConfig();

function getOrPanic(key: string) {
  const result = Deno.env.get(key);

  if (result) {
    return result;
  } else {
    throw new Error(`Missing '${key}' env variable!`);
  }
}

export function runBaseClientConfig() {
  let rawParams: Record<string, string>;
  let baseUrl: string;

  try {
    const uid = getOrPanic("S4_USER_ID");
    const tokenid = getOrPanic("S4_TOKEN_ID");
    baseUrl = getOrPanic("S4_BASE_URL");

    rawParams = {
      uid,
      tokenid,
      format: "json",
    };
  } catch (error) {
    console.log(error.message);
    Deno.exit(1);
  }

  const baseSearchParams = new URLSearchParams(rawParams).toString();

  return { baseUrl, baseSearchParams };
}
