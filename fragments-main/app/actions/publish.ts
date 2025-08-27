
'use server'

import { Duration, ms } from '@/lib/duration'
import { Sandbox } from '@e2b/code-interpreter'
export async function publish(
  url: string,
  sbxId: string,
  duration: Duration,
) {
  const expiration = ms(duration)
  await Sandbox.setTimeout(sbxId, expiration)

  return {
    url,
  }
}


