import { Client } from './client/client.ts'

async function runLang() {
  const client = new Client()
  const [path, param] = Deno.args

  if (path === 'syno' || path === 'poetry') {
    console.log(await client[path](param))
  }
}

if (import.meta.main) {
  runLang()
}
