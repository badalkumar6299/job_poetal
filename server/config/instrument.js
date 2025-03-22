import * as Sentry from "@sentry/node"
import { nodeProfilingIntegration } from "@sentry/profiling-node";
import mongoose from "mongoose";

// Ensure to call this before requiring any other modules!
Sentry.init({
  dsn: "https://665881b224a9b3078065df9f490246c0@o4508991445073920.ingest.us.sentry.io/4508991452807168",
  integrations: [
    // Add our Profiling integration
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration()
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  // Learn more at
  // https://docs.sentry.io/platforms/javascript/guides/node/configuration/options/#tracesSampleRate
  //tracesSampleRate: 1.0,

  // Set profilesSampleRate to 1.0 to profile 100%
  // of sampled transactions.
  // This is relative to tracesSampleRate
  // Learn more at
  // https://docs.sentry.io/platforms/javascript/guides/node/configuration/options/#profilesSampleRate
  profilesSampleRate: 1.0,
});
