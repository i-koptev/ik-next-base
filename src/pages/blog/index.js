import React from "react"
import Link from "next/link"
import { getSortedPostsData } from "../../lib/posts"

function Blog({ allPostsData }) {
    return (
        <div>
            <ul>
                {allPostsData.map(({ slug, date, title }) => (
                    <li key={slug}>
                        {title}
                        <br />
                        <Link href={`blog/${slug}`}>
                            <a>{slug}</a>
                        </Link>
                        <br />
                        {date}
                    </li>
                ))}
            </ul>

            <pre>{JSON.stringify(allPostsData, null, 2)}</pre>
        </div>
    )
    // return <div>asdad</div>
}

export async function getStaticProps({ locale, defaultLocale }) {
    const allPostsData = getSortedPostsData(locale, defaultLocale)

    return {
        props: { allPostsData },
    }
}

export default Blog
