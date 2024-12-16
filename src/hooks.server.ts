import { sequence } from "@sveltejs/kit/hooks";
import {
  handleErrorWithSentry,
  initCloudflareSentryHandle,
  sentryHandle,
} from "@sentry/sveltekit";

// If you have custom handlers, make sure to place them after `sentryHandle()` in the `sequence` function.
export const handle = sequence(
  initCloudflareSentryHandle({
    dsn: "https://7afaef87951bf1df3abe523ba73050f3@o4504389074223104.ingest.us.sentry.io/4505766774374400",

    tracesSampleRate: 1.0,

    // uncomment the line below to enable Spotlight (https://spotlightjs.com)
    // spotlight: import.meta.env.DEV,

    debug: true,
  }),
  sentryHandle()
);

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
