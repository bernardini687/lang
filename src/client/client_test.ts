import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { Client } from "./client.ts";

const { test } = Deno;

const userId = "foo";
const tokenId = "bar";
const baseUrl = "https://www.example.com/baz";

test("build the correct endpoints", () => {
  const client = new Client({ paths: ["foo", "bar"] });

  assertEquals(client.baseEndpoints, {
    foo: `${baseUrl}/foo.php?uid=${userId}&tokenid=${tokenId}&format=json`,
    bar: `${baseUrl}/bar.php?uid=${userId}&tokenid=${tokenId}&format=json`,
  });
});
