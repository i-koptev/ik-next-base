import { productsData } from "../data"

const Product = ({ product }) => {
    return (
        <div>
            <h3>Product</h3>
            <pre>{JSON.stringify(product, null, 2)}</pre>
        </div>
    )
}

export default Product

export async function getStaticPaths({ locales }) {
    const products = productsData
    let paths = []
    paths = [
        ...paths,
        ...products.map((product) => ({
            params: {
                id: product.id,
            },
            locale: product.locale,
        })),
    ]

    console.log(paths)

    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps({ params, locale }) {
    const product = productsData
        .filter((product) => product.id === params.id)
        .filter((product) => product.locale === locale)

    return {
        props: {
            product,
        },
    }
}
