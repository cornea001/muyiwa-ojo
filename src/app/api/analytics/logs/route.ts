import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const token = process.env.CLOUDFLARE_API_TOKEN
    const zoneId = process.env.CLOUDFLARE_ZONE_ID

    if (!token || !zoneId) {
      return NextResponse.json({ error: 'Missing Cloudflare credentials' }, { status: 500 })
    }

    // Free tier can only query strictly under 24 hours (use 23 hours to be safe)
    const yesterday = new Date(Date.now() - 23 * 60 * 60 * 1000).toISOString()

    const query = `
      query {
        viewer {
          zones(filter: { zoneTag: "${zoneId}" }) {
            httpRequestsAdaptiveGroups(
              limit: 20, 
              filter: { datetime_geq: "${yesterday}" }, 
              orderBy: [datetime_DESC]
            ) {
              dimensions {
                datetime
                clientIP
                clientCountryName
                clientDeviceType
                clientRequestPath
              }
            }
          }
        }
      }
    `

    const response = await fetch('https://api.cloudflare.com/client/v4/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 30 }
    })

    const data = await response.json()
    
    if (data.errors) {
      throw new Error(data.errors[0].message)
    }

    const rawLogs = data.data?.viewer?.zones?.[0]?.httpRequestsAdaptiveGroups || []
    
    // Map to a friendlier format for the frontend
    const formattedLogs = rawLogs.map((log: any, index: number) => {
      const d = log.dimensions
      return {
        id: index,
        ip: d.clientIP || 'Unknown',
        location: d.clientCountryName || 'Unknown',
        device: d.clientDeviceType || 'Unknown',
        page: d.clientRequestPath || '/',
        time: new Date(d.datetime).toLocaleString()
      }
    })

    return NextResponse.json(formattedLogs)

  } catch (error: any) {
    console.error('Cloudflare API Error:', error.message)
    return NextResponse.json({ error: 'Failed to fetch analytics logs' }, { status: 500 })
  }
}
