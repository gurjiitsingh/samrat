
export async function handleStripeWebhook(
  _body: string,
  _signature: string
) {
  return {
    success: true,
    status: 200,
    message: "Stripe webhook is disabled (dummy handler)",
  };
}
