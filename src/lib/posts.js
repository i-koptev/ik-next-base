// const { locales } = require("../../i18n")
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import remark from "remark"
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), "src/posts")

export function getSortedPostsData(locale, defaultLocale) {
    // Get file names under /posts
    const postSlugs = fs.readdirSync(postsDirectory)
    const allPostsData = postSlugs
        .map((slug) => {
            // Read markdown file as string
            const fileName =
                locale === defaultLocale ? "index.md" : `index.${locale}.md`
            const fullPath = path.join(postsDirectory, slug, fileName)

            if (!fs.existsSync(fullPath)) {
                return
            }

            const fileContents = fs.readFileSync(fullPath, "utf8")

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents)

            // Combine the data with the slug
            return {
                slug,
                ...matterResult.data,
            }
        })
        .filter((post) => post)
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export function getAllPostSlugs(locales, defaultLocale) {
    const paths = []

    const postSlugs = fs.readdirSync(postsDirectory)

    for (let slug of postSlugs) {
        for (let locale of locales) {
            const fullPath = path.join(
                postsDirectory,
                slug,
                locale === defaultLocale ? "index.md" : `index.${locale}.md`
            )
            if (!fs.existsSync(fullPath)) {
                continue
            }
            paths.push({ params: { slug: slug }, locale })
        }
    }

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       slug: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       slug: 'pre-rendering'
    //     }
    //   }
    // ]
    // return postSlugs.map((slug) => {
    //     return {
    //         params: {
    //             slug: slug,
    //         },
    //     }
    // })

    return paths
}

export async function getPostData(slug, locale, defaultLocale) {
    const fullPath = path.join(
        postsDirectory,
        slug,
        locale == defaultLocale ? "index.md" : `index.${locale}.md`
    )

    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)

    const contentHtml = processedContent.toString()

    // Combine the data with the slug
    return {
        slug,
        contentHtml,
        ...matterResult.data,
    }
}
