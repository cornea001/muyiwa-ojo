import { NextResponse } from 'next/server'
import { kvSet, kvGet } from '@/lib/kv'

export async function POST(req: Request) {
  try {
    const subscription = await req.json()
    
    // We store all subscriptions in an array
    let subs = await kvGet('push_subscriptions')
    if (!subs) subs = []
    
    // Check if it already exists
    const exists = subs.find((s: any) => s.endpoint === subscription.endpoint)
    if (!exists) {
      subs.push(subscription)
      await kvSet('push_subscriptions', subs)
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Subscription error:', error)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
