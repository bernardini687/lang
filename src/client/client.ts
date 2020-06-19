import { runBaseClientConfig } from './base_client_config.ts'

function buildEndpoints(paths: string[]): Record<string, string> {
  const { baseUrl, baseSearchParams } = runBaseClientConfig()

  return paths.reduce(
    (memo: Record<string, string>, path: string) =>
      Object.assign(memo, {
        [path]: `${baseUrl}/${path}.php?${baseSearchParams}`,
      }),
    {}
  )
}

interface Options {
  paths: string[]
}

export class Client {
  baseEndpoints: Record<string, string>

  constructor({ paths }: Options) {
    this.baseEndpoints = buildEndpoints(paths)
  }
}
