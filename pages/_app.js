import "../styles/index.css";
import { SSRProvider } from "@react-aria/ssr";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
    return (
        <SSRProvider>
            <Head>
                <link rel="icon" type="image/svg+xml" href="/pokeball.svg" />
            </Head>
            <Component {...pageProps} />
        </SSRProvider>
    );
}

export default MyApp;
