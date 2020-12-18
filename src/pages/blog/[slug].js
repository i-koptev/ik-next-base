import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"

import { getAllPostSlugs, getPostData } from "../../lib/posts"

const Post = ({ postData }) => {
    return (
        <div>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <h2>{postData.title}</h2>
            <p>{postData.date}</p>
            <p>{postData.slug}</p>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            {/* <pre>{JSON.stringify(postData, null, 2)}</pre> */}
        </div>
    )
}

export default Post

export async function getStaticPaths({ locales, defaultLocale }) {
    const paths = getAllPostSlugs(locales, defaultLocale)
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({
    params,
    locale,
    locales,
    defaultLocale,
}) {
    const postData = await getPostData(params.slug, locale, defaultLocale)
    return {
        props: {
            postData,
        },
    }
}
