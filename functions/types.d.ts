// Cloudflare Workers/Pages Types
// These types are provided by Cloudflare at runtime

interface KVNamespace {
  get(key: string): Promise<string | null>
  put(key: string, value: string): Promise<void>
  delete(key: string): Promise<void>
  list(options?: {
    prefix?: string
    limit?: number
    cursor?: string
  }): Promise<{
    keys: Array<{ name: string; expiration?: number; metadata?: unknown }>
    list_complete: boolean
    cursor?: string
  }>
}

