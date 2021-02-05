import Head from "next/head"
import { useRouter } from "next/router"

import { makeStyles, useTheme } from "@material-ui/styles"
import CircularProgress from "@material-ui/core/CircularProgress"

import MainLayout from "../../layouts/Main"

import { getAllPostSlugs, getPostData } from "../../lib/posts"

const useStyles = makeStyles((theme) => ({
    spinner: {
        backgroundColor: "#000",
        color: theme.palette.primary.main,
        fontSize: "3rem",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}))

const Post = (props) => {
    const { postData, iserr } = props

    const router = useRouter()
    const classes = useStyles()
    const theme = useTheme()

    if (router.isFallback) {
        return (
            <div className={classes.spinner}>
                <CircularProgress size={100} thickness={1} />
            </div>
        )
    }

    if (iserr) {
        return (
            <div className={classes.spinner}>
                <h1>Shit happens - no page found!</h1>
            </div>
        )
    }
    return (
        <MainLayout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <h2>{postData.title}</h2>
            <p>{postData.date}</p>
            <p>{postData.slug}</p>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            <pre>{JSON.stringify(postData, null, 2)}</pre>
        </MainLayout>
    )
}

export default Post

export async function getStaticPaths({ locales, defaultLocale }) {
    const paths = getAllPostSlugs(locales, defaultLocale)
    return {
        paths,
        // fallback: false,
        fallback: true,
    }
}

export async function getStaticProps({
    params,
    locale,
    locales,
    defaultLocale,
}) {
    try {
        const postData = await getPostData(params.slug, locale, defaultLocale)
        return {
            props: {
                postData,
            },
        }
    } catch (err) {
        console.log(err)
        const postData = []
        return {
            props: {
                postData,
                iserr: true,
            },
        }
    }
}
