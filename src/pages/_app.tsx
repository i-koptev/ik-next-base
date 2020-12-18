import React from "react"
import Head from "next/head"
import { AppProps } from "next/app"
import Container from "@material-ui/core/Container"

import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "../../src/theme"

import { useRouter } from "next/router"
// import Link from "next/link"
import Link from "../components/Link"

import "../styles/globals.css"

export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props
    const router = useRouter()

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side")
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles)
        }
    }, [])

    return (
        <React.Fragment>
            <Head>
                <title>My page</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Container maxWidth="lg">
                    <ul>
                        {router.locales.map((locale) => (
                            <li key={locale}>
                                <Link href={router.asPath} locale={locale}>
                                    {locale}&rarr;
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Component {...pageProps} />
                </Container>
            </ThemeProvider>
        </React.Fragment>
    )
}
