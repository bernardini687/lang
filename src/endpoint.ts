import { baseUrl, baseSearchParams } from './config.ts'

export class Endpoint {
  private readonly baseUrl: string
  private readonly baseSearchParams: string

  constructor() {
    this.baseUrl = baseUrl
    this.baseSearchParams = baseSearchParams
  }

  // static?
  // do i even need a class?
  abbrv() {
    return `${this.baseUrl}/abbrv.php?${this.baseSearchParams}`
  }
}
