// import { Hero, Projects, Team } from "./sections"
// import Slider from "./Slider"
// import { makeStyles, useTheme } from "@material-ui/styles"

import path from "path"

import { useRouter } from "next/router"
import Head from "next/head"
import Image from "next/image"

import showdown from "showdown"
import useTranslation from "next-translate/useTranslation"

import {
    Theme,
    makeStyles,
    createStyles,
    useTheme,
} from "@material-ui/core/styles"

import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

import Link from "../../components/Link"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: "-56px",
            [theme.breakpoints.up("sm")]: {
                marginTop: "-65px",
            },
        },
    })
)

const FrontPageView = ({
    products,
    test,
    viewSectionHeroData,
    viewSectionProjectsData,
    viewSectionTeamData,
}) => {
    const classes = useStyles()
    const theme = useTheme()
    const router = useRouter()
    const { t, lang } = useTranslation("common")
    const converter = new showdown.Converter()
    return (
        <Container maxWidth={theme.siteContainer.maxWidth}>
            <Typography variant="h3" component="h1" gutterBottom>
                {t("frontPage-heading")}
            </Typography>
            <pre>{JSON.stringify(products, null, 4)}</pre>
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
                        <div style={{ width: "300px", height: "300px" }}>
                            sdfsdsdf
                            <Image
                                src="/korjaga.jpg"
                                alt="Picture of the author"
                                width={2977}
                                height={1962}
                                // quality={100}
                            />
                        </div>

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
                    </main>
                </div>
            </Box>
            {/* <Hero {...viewSectionHeroData} className={classes.root} />
        <Projects {...viewSectionProjectsData} />
        <Team {...viewSectionTeamData} />
        <Slider /> */}
        </Container>
    )
}

export default FrontPageView

// FrontPageView.propTypes = {
//     className: PropTypes.string,
//     header: PropTypes.string,
//     emailLabel: PropTypes.string,
//     email: PropTypes.string,
//     addressLabel: PropTypes.string,
//     address: PropTypes.string,
//     phoneNumberLabel: PropTypes.string,
//     phone: PropTypes.string,
// }
