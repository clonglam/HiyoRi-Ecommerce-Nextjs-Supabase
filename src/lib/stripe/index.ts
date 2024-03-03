import { env } from "@/env.mjs";
import Stripe from "stripe";

export const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
  appInfo: {
    name: "HiyoRi",
    version: "0.1.0",
  },
});
