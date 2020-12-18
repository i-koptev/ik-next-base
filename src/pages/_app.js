import { useRouter } from "next/router"
import Link from "next/link"

import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
    const router = useRouter()

    return (
        <>
            <ul>
                {router.locales.map((locale) => (
                    <li key={locale}>
                        <Link href={router.asPath} locale={locale}>
                            <a>{locale}&rarr;</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
