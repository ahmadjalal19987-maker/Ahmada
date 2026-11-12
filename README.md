# MINNIG IRAQIYAN

Responsive Arabic/Kurdish/English starter website with Supabase email authentication.

## Run locally
1. Install Node.js 20+.
2. Run `npm install`.
3. Copy `.env.example` to `.env` and set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
4. Run `npm run dev`.

## Deploy on Vercel
1. Import this repository in Vercel.
2. Add the two environment variables above in Project Settings → Environment Variables.
3. Deploy. Build command: `npm run build`; output directory: `dist`.
4. In Supabase → Authentication → URL Configuration, set Site URL to the deployed Vercel URL and add that URL to Redirect URLs.

Only use the Supabase publishable key in the browser. Never expose a `service_role` or secret key. This starter includes account authentication and informational pages only; it does not process deposits, withdrawals, mining payouts, or promise returns. Add any real financial functionality only after legal, security, and operational review.
