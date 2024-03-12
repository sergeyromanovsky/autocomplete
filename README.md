This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Assessment

You are to implement an accessible autocomplete input using Shadcn, Radix UI, and Tailwind CSS. You may optionally use cmdk as well.

You must use either Remix or Next.js, TypeScript, and React Query v5 to implement your example project that demonstrates that your autocomplete input component works as intended.

The example project must demonstrate that the autocomplete input performs queries via. HTTP requests managed by React Query v5 against a request handler you define in your example project.

When a query is specified to the autocomplete input, a dropdown list should immediately show with the closest matches to the query specified. Some sort of loading indicator (i.e. a spinner or skeleton) should be shown in the dropdown list while any queries are being performed.
