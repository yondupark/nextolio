import '../styles/reset.scss';
import '../styles/header.scss';
import type { AppProps } from 'next/app';
import { useState } from "react";
import Head from 'next/head';
import Header from '../Components/Header/Header';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <>
            <Head>
                <title>Nextolio</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Next.js를 활용한 뭔가 만드는 페이지" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
                <Header />
                <Component {...pageProps} />
            </QueryClientProvider>
        </>
    );
}

export default MyApp;
