function getEnvOrPanic(key: string) {
  const result = Deno.env.get(key)

  if (result) {
    return result
  } else {
    throw new Error(`Missing '${key}' env variable!`)
  }
}

export function runBaseClientConfig() {
  let rawParams: Record<string, string>
  let baseUrl: string

  try {
    const uid = getEnvOrPanic('S4_USER_ID')
    const tokenid = getEnvOrPanic('S4_TOKEN_ID')

    baseUrl = getEnvOrPanic('S4_BASE_URL')
    rawParams = {
      uid,
      tokenid,
      format: 'json',
    }
  } catch (error) {
    console.error(error.message)
    Deno.exit(1)
  }

  const baseSearchParams = `${new URLSearchParams(rawParams).toString()}&`

  return { baseUrl, baseSearchParams }
}
