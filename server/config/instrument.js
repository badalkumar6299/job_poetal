import * as Sentry from "@sentry/node"

import { nodeProfilingIntegration } from "@sentry/profiling-node";

// Ensure to call this before requiring any other modules!
Sentry.init({
  dsn: "https://665881b224a9b3078065df9f490246c0@o4508991445073920.ingest.us.sentry.io/4508991452807168",
  integrations: [
    // Add our Profiling integration
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration()
  ],

  // Add Tracing by setting tracesSampleRate
  // We recommend adjusting this value in production
  //tracesSampleRate: 1.0,

  // Set sampling rate for profiling
  // This is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});
