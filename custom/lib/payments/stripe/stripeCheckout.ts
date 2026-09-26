export async function createStripeCheckoutSessionInternal({
  orderMasterId,
}: {
  orderMasterId: string;
}) {
  return {
    success: false,
    error: "Stripe payment is not enabled for this country.",
    url: null,
  };
}