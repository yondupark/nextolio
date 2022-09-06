import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../assets/scss/base/reset.scss';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Nextolio</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Next.js를 활용한 뭔가 만드는 페이지" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
