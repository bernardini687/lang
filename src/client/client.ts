import { runBaseClientConfig } from './base_client_config.ts'

const { baseUrl, baseSearchParams } = runBaseClientConfig()

interface Options {
  paths: string[]
}

export class Client {
  baseEndpoints: Record<string, string>

  constructor({ paths }: Options) {
    this.baseEndpoints = paths.reduce(
      (memo, path) =>
        Object.assign(memo, {
          [path]: `${baseUrl}/${path}.php?${baseSearchParams}`,
        }),
      {}
    )
  }
}
