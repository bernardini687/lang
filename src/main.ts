import { Client } from "./client/client.ts";

const client = new Client({ paths: ["poetry", "syno"] });
console.log(client.baseEndpoints);
