import { Client } from './client/client.ts'

function runLang() {
  const client = new Client({ paths: ['poetry', 'syno'] })
  console.log(client.baseEndpoints)
}

if (import.meta.main) {
  runLang()
}
