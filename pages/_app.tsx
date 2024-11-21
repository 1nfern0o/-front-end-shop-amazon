import '@/app/assets/styles/globals.scss'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Image from "next/image";
import { Provider } from "react-redux";
import { persistor, store } from "@/app/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { NextPage } from "next";
import { TypeComponentAuthFields } from '@/app/providers/auth-provider/auth-page.types';
import AuthProvider from '@/app/providers/auth-provider/AuthProvider';

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps & TypeComponentAuthFields) {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthProvider Component={{ isOnlyUser: Component.isOnlyUser }}>
            <Component {...pageProps} />
          </AuthProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  )
}
