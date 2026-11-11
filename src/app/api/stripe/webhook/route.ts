
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  // Stripe disabled: return a dummy response.
  if (process.env.ENABLE_STRIPE !== "true") {
    return NextResponse.json(
      {
        success: true,
        message: "Stripe is disabled",
      },
      { status: 200 }
    );
  }

  // Check configuration before loading Stripe.
  if (
    !process.env.STRIPE_SECRET_KEY ||
    !process.env.STRIPE_WEBHOOK_SECRET
  ) {
    console.error("Stripe configuration is missing.");

    return NextResponse.json(
      { success: false, message: "Stripe configuration missing" },
      { status: 500 }
    );
  }

  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { success: false, message: "Missing Stripe signature" },
      { status: 400 }
    );
  }

  try {
    const body = await req.text();

    // Load Stripe handler only when enabled.

    const { handleStripeWebhook } = await import("../../../../../custom/lib/payments/stripe/stripeWebhook");

    const result = await handleStripeWebhook(body, signature);

    return NextResponse.json(
      {
        success: result.success,
        message: result.message,
      },
      { status: result.status }
    );
  } catch (error) {
    console.error("Stripe webhook error:", error);

    return NextResponse.json(
      { success: false, message: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
