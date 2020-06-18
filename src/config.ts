import { config } from './deps.ts'

function getEnv(key: string, defaultValue = '') {
  return Deno.env.get(key) || defaultValue
}

config({ export: true })

const rawParams = {
  uid: getEnv('S4_USER_ID'),
  tokenid: getEnv('S4_TOKEN_ID'),
  format: 'json',
}

export const baseUrl = getEnv('S4_BASE_URL')
export const baseSearchParams = new URLSearchParams(rawParams).toString()
