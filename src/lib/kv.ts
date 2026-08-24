import fs from 'fs'
import path from 'path'

// In a real production environment, you should use the Cloudflare REST API to read/write KV.
// For local development, this falls back to a simple local JSON file.

const LOCAL_KV_PATH = path.join(process.cwd(), '.kv-mock.json')

function getLocalKV() {
  if (!fs.existsSync(LOCAL_KV_PATH)) {
    fs.writeFileSync(LOCAL_KV_PATH, JSON.stringify({}))
  }
  return JSON.parse(fs.readFileSync(LOCAL_KV_PATH, 'utf-8'))
}

function setLocalKV(data: any) {
  fs.writeFileSync(LOCAL_KV_PATH, JSON.stringify(data, null, 2))
}

export async function kvSet(key: string, value: any): Promise<void> {
  const namespaceId = process.env.CLOUDFLARE_KV_NAMESPACE_ID
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID
  const token = process.env.CLOUDFLARE_API_TOKEN

  if (namespaceId && accountId && token) {
    // Write to Cloudflare KV
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/values/${key}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: typeof value === 'string' ? value : JSON.stringify(value)
      }
    )
    if (!response.ok) {
      throw new Error(`Cloudflare KV Set failed: ${await response.text()}`)
    }
  } else {
    // Write locally
    const kv = getLocalKV()
    kv[key] = value
    setLocalKV(kv)
  }
}

export async function kvGet(key: string): Promise<any | null> {
  const namespaceId = process.env.CLOUDFLARE_KV_NAMESPACE_ID
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID
  const token = process.env.CLOUDFLARE_API_TOKEN

  if (namespaceId && accountId && token) {
    // Read from Cloudflare KV
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/values/${key}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
    if (response.status === 404) return null
    if (!response.ok) throw new Error('Cloudflare KV Get failed')
    
    try {
      return await response.json()
    } catch {
      return await response.text()
    }
  } else {
    // Read locally
    const kv = getLocalKV()
    return kv[key] || null
  }
}
