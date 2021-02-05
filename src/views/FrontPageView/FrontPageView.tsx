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
                                    // !!! server-client don't match href={path.join(__dirname, product.id)}
                                    // !!! server-client don't match href={path.join(process.cwd(), product.id)}
                                    href={`/${product.id}`}
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
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maxime porro eveniet incidunt distinctio fugit
                            similique in, ullam praesentium cumque nostrum,
                            optio impedit eligendi alias recusandae soluta culpa
                            rem at facilis magni ut reprehenderit! Aliquid
                            perspiciatis, sapiente dolorum, ratione consectetur
                            nemo nostrum, repudiandae perferendis possimus at
                            temporibus tempora. Quibusdam corporis rerum,
                            repellendus nihil eaque explicabo? Repellat vel
                            veritatis, placeat maiores, qui tempore dolor ab
                            aperiam voluptatibus quod delectus quisquam eligendi
                            molestias facere dolorem reiciendis enim autem cum.
                            Inventore, laborum velit. Dolore culpa, dolorum
                            delectus quasi similique, nemo atque laborum nisi
                            voluptate velit provident illo tenetur dignissimos
                            magni expedita tempore beatae repellendus
                            consectetur in reiciendis? Maiores quo eveniet nulla
                            libero quas! Pariatur esse, quasi illum rerum
                            expedita et sunt labore autem. Dolorem, vero.
                            Consequatur accusantium nisi expedita alias
                            architecto ratione sit saepe dicta rem consequuntur
                            repellendus, quisquam velit quas. Non, possimus
                            natus? Porro necessitatibus, non enim iste corrupti
                            officiis natus facilis nesciunt expedita iusto
                            voluptate ipsa, beatae reprehenderit sit quibusdam
                            mollitia? Deserunt est non accusamus ad, ipsa veniam
                            velit sapiente dicta rerum dolore, sit vero autem
                            beatae nam! Est delectus tempora et sapiente quia
                            nobis consequuntur ipsa, nam corrupti. Aperiam
                            iusto, voluptatibus consequuntur saepe minima
                            sapiente. Sequi, ipsam? Aliquid fuga blanditiis sint
                            dolores molestias laudantium iure doloribus sunt,
                            ullam optio cumque explicabo atque mollitia quasi
                            delectus tempore quas minima esse quae! Animi,
                            nesciunt expedita cupiditate sunt error aliquam unde
                            at ipsum blanditiis neque labore facilis impedit
                            exercitationem perspiciatis, veritatis ea temporibus
                            assumenda nemo recusandae magni nostrum? Temporibus
                            vel, assumenda quisquam, totam, voluptatem suscipit
                            ad quibusdam tenetur vero fugit tempora? Illo, quas
                            omnis veritatis cumque amet sit corrupti eligendi
                            adipisci voluptas blanditiis hic at odio facere
                            dignissimos consequatur. Vitae sapiente fugiat
                            consequuntur dolorum odit, porro inventore
                            accusantium, qui deleniti, illum voluptatem? Saepe
                            veniam assumenda reprehenderit, dignissimos minus
                            sapiente molestiae accusantium suscipit adipisci
                            ipsum qui, natus fuga inventore quod exercitationem
                            voluptatem obcaecati iure ex labore amet odio
                            delectus laboriosam esse! Vero veritatis in vitae,
                            est incidunt facere nihil laborum cum tenetur fugit
                            corrupti tempore velit quae fuga repellat itaque
                            porro. Hic alias minima neque, commodi libero eos
                            quibusdam illo placeat inventore necessitatibus
                            nesciunt dignissimos nemo cum iusto praesentium
                            earum deleniti animi! Ratione maiores nobis
                            repellendus esse quidem ducimus modi iste quos
                            voluptatum! Ipsam sequi excepturi minus,
                            voluptatibus numquam quisquam itaque autem mollitia
                            a, totam aut. Eligendi, nisi odit? Natus cupiditate
                            doloremque a sed impedit totam ratione magnam alias
                            iure accusantium error ipsa, vitae amet ipsam
                            tempore dolorem perspiciatis. Libero optio quia
                            aliquid ea eaque voluptate totam perferendis
                            molestias iste praesentium, ducimus ut incidunt
                            explicabo! Cupiditate mollitia obcaecati eaque
                            corrupti adipisci sint minus nemo amet voluptatibus
                            culpa voluptates consequuntur eligendi, ex molestias
                            necessitatibus a quisquam sunt distinctio odio quas
                            molestiae reiciendis harum corporis? Molestias
                            reprehenderit enim esse ratione quasi incidunt,
                            magnam iste, placeat, porro nisi ipsum impedit.
                            Tenetur repudiandae facilis quod officiis ut natus
                            molestiae aliquid nobis pariatur nemo, nam beatae,
                            magnam quidem eligendi. Ea consequuntur, enim
                            repellat aliquid dolor dolorem delectus asperiores
                            nostrum cupiditate libero omnis impedit in commodi
                            nam dignissimos, id quidem facere?
                        </p>
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
