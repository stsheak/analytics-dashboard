import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://usw1-relative-herring-33794.upstash.io',
  token: process.env.REDIS_KEY!,
})
