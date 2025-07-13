# AVAX NFT Payment Page

A simple and elegant payment page for collecting AVAX cryptocurrency for your NFT project using thirdweb's payment components.

## Features

- Accept payments in AVAX cryptocurrency
- Multiple payment methods (crypto wallet and credit card)
- Beautiful, responsive UI
- Built with Next.js and Tailwind CSS
- Powered by thirdweb's payment infrastructure

## Prerequisites

- Node.js 16.8 or later
- npm or yarn

## Getting Started

1. Clone this repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Configuration

The payment widget is configured with your thirdweb client ID. If you need to modify the payment details:

- Update the seller address in `src/app/page.tsx` with your actual wallet address
- Adjust the amount, title, description, and other parameters as needed

## Deployment

This Next.js app can be easily deployed to platforms like Vercel, Netlify, or any other hosting service that supports Next.js applications.

```bash
npm run build
# or
yarn build
```

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [thirdweb Documentation](https://portal.thirdweb.com/pay)

## License

MIT
