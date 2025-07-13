import type { AppProps } from 'next/app';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Avalanche } from "@thirdweb-dev/chains";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../app/globals.css';

// Client ID
const CLIENT_ID = "73d35ed4ef1dd510b98d83df05a64931";

// Create a client
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider 
        clientId={CLIENT_ID}
        activeChain={Avalanche}
      >
        <Component {...pageProps} />
      </ThirdwebProvider>
    </QueryClientProvider>
  );
}
