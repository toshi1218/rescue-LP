import Stripe from 'stripe';
import { Hono } from 'hono';
import { cors } from 'hono/cors';

type Bindings = {
  STRIPE_SECRET_KEY?: string;
  STRIPE_WEBHOOK_SECRET?: string;
  ALLOWED_ORIGIN: string;
};

// Service definitions with base prices (JPY)
const SERVICE_PRICES: Record<string, { name: string; amount: number; currency: string }> = {
  pack: {
    name: '国際結婚準備パック（着手金50%）',
    amount: 49900,
    currency: 'jpy',
  },
  visa: {
    name: '配偶者ビザ準備書類パック（着手金50%）',
    amount: 50000,
    currency: 'jpy',
  },
  lto: {
    name: '外免切替サポート（着手金50%）',
    amount: 50000,
    currency: 'jpy',
  },
  nbi: {
    name: 'NBIクリアランス取得サポート（着手金50%）',
    amount: 27500,
    currency: 'jpy',
  },
  naturalization: {
    name: '帰化申請書類パック（着手金50%）',
    amount: 55000,
    currency: 'jpy',
  },
};

const app = new Hono<{ Bindings: Bindings }>();

app.use('*', (c, next) => {
  const origin = c.env.ALLOWED_ORIGIN;
  return cors({
    origin,
    allowMethods: ['POST', 'OPTIONS'],
    allowHeaders: ['Content-Type'],
    maxAge: 86400,
  })(c, next);
});

app.get('/', (c) => c.text('ph-document stripe worker: OK', 200));

// Create a Stripe Checkout Session for a given service
app.post('/checkout', async (c) => {
  const secretKey = c.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return c.json({ error: 'stripe_not_configured' }, 500);
  }

  let body: { serviceId?: string };
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: 'invalid_json' }, 400);
  }

  const serviceId = body.serviceId;
  if (!serviceId || !SERVICE_PRICES[serviceId]) {
    return c.json({ error: 'invalid_service' }, 400);
  }

  const service = SERVICE_PRICES[serviceId];
  const origin = c.env.ALLOWED_ORIGIN;

  const stripe = new Stripe(secretKey, { apiVersion: '2025-04-30.basil' });

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: service.currency,
            unit_amount: service.amount,
            product_data: {
              name: service.name,
              description: 'IGRS Inc. フィリピン書類取得代行サービス',
            },
          },
        },
      ],
      success_url: `${origin}/ja/payment-success/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/ja/payment-cancel/`,
      locale: 'ja',
      metadata: { serviceId },
    });

    return c.json({ url: session.url });
  } catch (err) {
    console.error('[stripe] checkout error', err);
    return c.json({ error: 'checkout_failed' }, 500);
  }
});

// Stripe webhook handler (for order confirmation)
app.post('/webhook', async (c) => {
  const webhookSecret = c.env.STRIPE_WEBHOOK_SECRET;
  const secretKey = c.env.STRIPE_SECRET_KEY;
  if (!secretKey || !webhookSecret) {
    return c.json({ error: 'not_configured' }, 500);
  }

  const signature = c.req.header('stripe-signature');
  if (!signature) {
    return c.json({ error: 'missing_signature' }, 400);
  }

  const stripe = new Stripe(secretKey, { apiVersion: '2025-04-30.basil' });
  const body = await c.req.text();

  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret);
  } catch (err) {
    console.error('[stripe] webhook signature error', err);
    return c.json({ error: 'invalid_signature' }, 400);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    console.log('[stripe] payment completed', {
      sessionId: session.id,
      serviceId: session.metadata?.serviceId,
      amount: session.amount_total,
      customerEmail: session.customer_details?.email,
    });
  }

  return c.json({ received: true });
});

export default app;
