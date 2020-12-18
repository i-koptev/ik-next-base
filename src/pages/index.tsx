import { useRouter } from "next/router"
import path from "path"
import showdown from "showdown"

// import Link from "next/link"
import Link from "../components/Link"
import useTranslation from "next-translate/useTranslation"

import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

import { productsData } from "../data"

import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function IndexPage({ products }) {
    const router = useRouter()
    const { t, lang } = useTranslation("common")
    const converter = new showdown.Converter()
    return (
        // <Container maxWidth="md">
            <Box my={4}>
                <div>
                    <Head>
                        <title>Create Next App</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>

                    <main>
                        <Typography variant="h4" component="h1" gutterBottom>
                            {t("title")}
                        </Typography>

                        <h6>{t("variable-example", { count: "asd" })}</h6>
                        {products.map((product) => (
                        <div key={product.id}>
                                <Link
                                    href={path.join(process.cwd(), product.id)}
                                    color="secondary"
                                >
                                    <h3>{product.name}</h3>
                                </Link>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: converter.makeHtml(
                                            product.description
                                        ),
                                    }}
                                />
                            </div>
                        ))}
                        {/* <pre>{JSON.stringify(router, null, 2)}</pre> */}
                        <pre>{JSON.stringify(products, null, 2)}</pre>
                    </main>
                </div>
            </Box>
        // </Container>
    )
}

export async function getStaticProps({ locale, defaultLocale }) {
    const products = !!productsData.filter(
        (product) => product.locale === locale
    ).length
        ? productsData.filter((product) => product.locale === locale)
        : productsData.filter((product) => product.locale === defaultLocale) //fallback to default locale

    return {
        props: { products },
        // props: { hello: "123" },
    }
}
