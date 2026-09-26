export async function handleStripeWebhook(
  _body: string,
  _signature: string
) {
  return {
    success: false,
    status: 200,
    message: "Stripe webhook is not enabled.",
  };
}