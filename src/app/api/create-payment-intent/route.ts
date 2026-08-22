export const dynamic = "force-dynamic"

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  try {
    // Lazy-initialize so the key is read at request time, not build time
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

    const { amount } = await request.json();

    if (!amount || amount < 100) {
      return NextResponse.json(
        { error: "Minimum donation amount is $1" },
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "cad",
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create Payment Intent" },
      { status: 500 }
    );
  }
}
