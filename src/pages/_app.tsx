import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { useState } from "react";
import { UserContext } from "../contexts/user-context";
import "../styles/globals.css";
import theme from "../styles/theme";

import {
  configureChains,
  createClient,
  defaultChains,
  WagmiConfig,
} from "wagmi";

import { publicProvider } from "wagmi/providers/public";

import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider(),
]);

// Set up client
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "wagmi",
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: "Injected",
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  const [email, setEmail] = useState(undefined);
  const [address, setAddress] = useState(undefined);
  const [nickname, setNickname] = useState(undefined);

  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig client={client}>
        <UserContext.Provider
          value={{
            email,
            setEmail,
            address,
            setAddress,
            nickname,
            setNickname,
          }}
        >
          <Component {...pageProps} />
        </UserContext.Provider>
      </WagmiConfig>
    </ChakraProvider>
  );
}

export default MyApp;
