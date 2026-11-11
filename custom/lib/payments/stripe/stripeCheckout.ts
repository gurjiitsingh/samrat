
"use server";

export async function createStripeCheckoutSessionInternal({
  orderMasterId,
}: {
  orderMasterId: string;
}) {
  return {
    success: false,
    error: "Stripe payment is currently disabled.",
    url: null,
  };
}
