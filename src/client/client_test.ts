import { assertEquals, config } from '../dev_deps.ts'
import { Client } from './client.ts'

Deno.test('build the correct endpoints', () => {
  config({ path: `${Deno.cwd()}/.env.test`, export: true })

  const userId = 'asdf'
  const tokenId = 'qwerty'
  const baseUrl = 'https://www.example.com/baz'

  const client = new Client({ paths: ['foo', 'bar'] })

  assertEquals(client.baseEndpoints, {
    foo: `${baseUrl}/foo.php?uid=${userId}&tokenid=${tokenId}&format=json`,
    bar: `${baseUrl}/bar.php?uid=${userId}&tokenid=${tokenId}&format=json`,
  })
})
