import { config } from '../deps.ts'

export function runConfig() {
  const denoEnv = Deno.env.get('DENO_ENV')

  if (denoEnv === 'test') {
    config({ path: `${Deno.cwd()}/.env.test`, export: true })
  } else if (denoEnv === 'dev') {
    config({ export: true })
  }
}
