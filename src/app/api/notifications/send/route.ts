import { NextResponse } from 'next/server'
import webPush from 'web-push'
import { kvGet, kvSet } from '@/lib/kv'

export async function POST(req: Request) {
  try {
    const publicVapidKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
    const privateVapidKey = process.env.VAPID_PRIVATE_KEY
    const subject = process.env.VAPID_SUBJECT

    if (publicVapidKey && privateVapidKey && subject) {
      webPush.setVapidDetails(subject, publicVapidKey, privateVapidKey)
    } else {
      console.warn('VAPID keys not fully configured.')
    }
    const { title, body } = await req.json()
    
    const subs = await kvGet('push_subscriptions')
    if (!subs || subs.length === 0) {
      return NextResponse.json({ error: 'No active subscriptions' }, { status: 400 })
    }

    const payload = JSON.stringify({
      title: title || 'New Alert',
      body: body || 'You have a new notification in the Admin Dashboard.'
    })

    // Send to all stored subscriptions
    const results = await Promise.allSettled(
      subs.map((sub: any) => webPush.sendNotification(sub, payload))
    )

    // Clean up any expired subscriptions (status 410 or 404)
    let hasFailures = false
    const activeSubs = subs.filter((sub: any, i: number) => {
      const result = results[i]
      if (result.status === 'rejected') {
        const error: any = result.reason
        if (error.statusCode === 410 || error.statusCode === 404) {
          hasFailures = true
          return false // Remove this subscription
        }
      }
      return true
    })

    if (hasFailures) {
      await kvSet('push_subscriptions', activeSubs)
    }

    return NextResponse.json({ success: true, count: activeSubs.length })

  } catch (error: any) {
    console.error('Send push error:', error)
    return NextResponse.json({ error: 'Failed to send push notification' }, { status: 500 })
  }
}
