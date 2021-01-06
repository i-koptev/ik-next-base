import MainLayout from "../layouts/Main"
import { FrontPageView } from "../views"
import { productsData } from "../data"

export default function IndexPage(props) {
    const { products } = props
    return (
        <MainLayout>
            <FrontPageView products={products} />
        </MainLayout>
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
