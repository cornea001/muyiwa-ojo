import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const token = process.env.CLOUDFLARE_API_TOKEN
    const zoneId = process.env.CLOUDFLARE_ZONE_ID

    if (!token || !zoneId) {
      return NextResponse.json({ error: 'Missing Cloudflare credentials' }, { status: 500 })
    }

    // Calculate dates for current 30 days and previous 30 days
    const now = new Date()
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
    const sixtyDaysAgo = new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000)

    const currentStart = thirtyDaysAgo.toISOString().split('T')[0]
    const previousStart = sixtyDaysAgo.toISOString().split('T')[0]

    const query = `
      query {
        viewer {
          zones(filter: { zoneTag: "${zoneId}" }) {
            current: httpRequests1dGroups(limit: 1, filter: { date_geq: "${currentStart}" }) {
              sum {
                pageViews
                requests
              }
              uniq {
                uniques
              }
            }
            previous: httpRequests1dGroups(limit: 1, filter: { date_geq: "${previousStart}", date_lt: "${currentStart}" }) {
              sum {
                pageViews
                requests
              }
              uniq {
                uniques
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
      next: { revalidate: 60 }
    })

    const data = await response.json()
    
    if (data.errors) {
      throw new Error(data.errors[0].message)
    }

    const zoneData = data.data?.viewer?.zones?.[0] || {}
    const current = zoneData.current?.[0] || { sum: { pageViews: 0, requests: 0 }, uniq: { uniques: 0 } }
    const previous = zoneData.previous?.[0] || { sum: { pageViews: 0, requests: 0 }, uniq: { uniques: 0 } }

    const curPageViews = current.sum?.pageViews || 0
    const prevPageViews = previous.sum?.pageViews || 0
    
    const curRequests = current.sum?.requests || 0
    const prevRequests = previous.sum?.requests || 0

    const curUniques = current.uniq?.uniques || 0
    const prevUniques = previous.uniq?.uniques || 0

    // Calculate percentage change
    const calcTrend = (cur: number, prev: number) => {
      if (prev === 0) return cur > 0 ? 100 : 0
      return Math.round(((cur - prev) / prev) * 100 * 10) / 10
    }

    return NextResponse.json({
      pageViews: curPageViews,
      pageViewsTrend: calcTrend(curPageViews, prevPageViews),
      requests: curRequests,
      requestsTrend: calcTrend(curRequests, prevRequests),
      uniques: curUniques,
      uniquesTrend: calcTrend(curUniques, prevUniques)
    })

  } catch (error: any) {
    console.error('Cloudflare API Error:', error.message)
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 })
  }
}
