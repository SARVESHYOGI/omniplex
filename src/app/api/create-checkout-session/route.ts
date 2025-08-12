import Stripe from "stripe";
import { NextRequest } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {});

export async function POST(req: NextRequest) {
  try {
    const origin = req.headers.get("origin") || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          price: "price_1RvKF5DBodc6cOoeEuNVhSyy",
          quantity: 1,
        },
      ],
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`,
    });

    return Response.json({ sessionId: session.id });
  } catch (err: any) {
    console.error("Stripe checkout error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
