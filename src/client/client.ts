import { runBaseClientConfig } from './base_client_config.ts'

type Path = 'syno' | 'poetry'
type Param = 'word' | 'term'

export class Client {
  private readonly baseUrl: string
  private readonly baseSearchParams: string

  constructor() {
    const { baseUrl, baseSearchParams } = runBaseClientConfig()

    this.baseUrl = baseUrl
    this.baseSearchParams = baseSearchParams
  }

  // SynoResponse
  async syno(word: string) {
    return this.fetchResource(this.buildUrl('syno', 'word', word))
  }

  // PoetryResponse
  async poetry(term: string) {
    return this.fetchResource(this.buildUrl('poetry', 'term', term))
  }

  private buildUrl(path: Path, param: Param, value: string): string {
    return this.buildBaseEndpoint(path) + this.buildSearchParams({ [param]: value })
  }

  private buildBaseEndpoint(path: Path): string {
    return `${this.baseUrl}/${path}.php?${this.baseSearchParams}`
  }

  private buildSearchParams(rawParams: Record<string, string>): string {
    return new URLSearchParams(rawParams).toString()
  }

  private async fetchResource(url: string) {
    console.log(url)
    const res = await fetch(url)

    try {
      return this.handleResponse(res)
    } catch (error) {
      console.error(error.message)
      Deno.exit(1)
    }
  }

  private async handleResponse(res: Response) {
    if (res.ok) {
      return res.json()
    }

    throw new Error(`Error while fetching '${res.url}': ${res.statusText}`)
  }
}
