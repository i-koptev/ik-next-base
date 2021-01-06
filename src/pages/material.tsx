import React from "react"
import {
    createStyles,
    makeStyles,
    Theme,
    useTheme,
} from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

import logo from "../../public/logo-iks"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbarMargin: {
            ...theme.mixins.toolbar,
        },
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
            marginLeft: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            color: theme.palette.common.white,
        },
    })
)

export default function ButtonAppBar() {
    const classes = useStyles()
    const theme = useTheme()

    return (
        <div className={classes.root}>
            {/* <AppBar position="static"> */}
            <AppBar>
                <Toolbar disableGutters>
                    {/* <img src="/logo-iks.svg" style={{ height: "54px" }} /> */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        height="50px"
                    >
                        <path
                            d="M50 8.5A41.5 41.5 0 118.5 50 41.55 41.55 0 0150 8.5M50 0a50 50 0 1050 50A50 50 0 0050 0z"
                            fill="#ffffff"
                        />
                        <path
                            d="M70.5 29.5v41h-41v-41h41M79 21H21v58h58V21z"
                            fill="#ffffff"
                        />
                    </svg>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin} />
            <pre>{JSON.stringify(theme, null, 4)}</pre>
            Hello world Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Unde ut magni quis, molestiae et magnam. Necessitatibus, neque
            dicta magni velit facere, quis iste sint dignissimos rerum, qui
            incidunt mollitia! Quaerat deleniti nemo asperiores dolor
            necessitatibus. Doloremque debitis aperiam ratione hic totam dicta
            maxime sint dolorem! Saepe, facilis tempora. Qui incidunt impedit
            delectus necessitatibus rem porro, atque dolorem consectetur?
            Possimus iste modi incidunt vitae nesciunt, non aspernatur
            consequuntur minus delectus. Aliquam et labore cum nobis ipsum
            expedita voluptatem unde saepe voluptate ad, officiis quas magnam
            dolor est consectetur molestiae odio voluptates nostrum veritatis
            hic consequatur. Laboriosam corrupti consequuntur incidunt possimus
            praesentium repudiandae. Error temporibus architecto in nesciunt
            molestiae facere recusandae neque, excepturi consectetur laborum
            mollitia animi, quidem ea rerum ipsum minima. Architecto molestias
            quasi consequuntur quod aliquid, distinctio laboriosam! Suscipit ea
            vel, dolore excepturi iure molestias perspiciatis libero voluptate
            modi distinctio saepe hic, soluta delectus fugit! Repellat inventore
            corporis dolorem! Esse sit ad sint itaque assumenda, quod earum
            molestiae iste ex eveniet ipsam, alias explicabo unde. Veniam sint
            voluptas nesciunt eligendi quidem, neque earum ut, nulla, quam sequi
            distinctio voluptatem fugit omnis ipsa blanditiis aperiam! Eos
            cupiditate nam ipsa. Doloremque, ipsa impedit? Excepturi adipisci
            consectetur voluptas dicta soluta obcaecati fuga. Dolore, magni!
            Adipisci, quo esse. Qui alias vel deserunt enim numquam minus odio
            deleniti, nulla explicabo est, sed libero aperiam dolorum aliquid,
            itaque eius tenetur id. Doloribus nulla suscipit ab, sequi rem
            quaerat, quia neque quidem amet fuga repudiandae veritatis delectus
            fugiat expedita et voluptatem voluptate earum culpa iure labore
            aliquam error obcaecati animi laborum! Atque soluta impedit sint
            dignissimos minus rerum minima necessitatibus alias, dolores error,
            itaque iure ad ipsa distinctio nulla, reprehenderit qui! Magnam
            voluptas sapiente velit ducimus esse quis, explicabo commodi in
            rerum provident quibusdam voluptatum deserunt, dolorum est
            laboriosam veritatis, autem sed earum nobis eaque quos laborum
            blanditiis. Ea corporis iure beatae? Neque deserunt nemo enim
            dolorem, incidunt voluptatibus pariatur? Asperiores blanditiis,
            nulla eum distinctio aliquid possimus ex, harum commodi dignissimos
            culpa totam iste velit quo doloribus aspernatur tenetur, similique
            ab tempore? Nobis laudantium ex, aspernatur quidem maxime officia
            doloremque tenetur provident perspiciatis libero repudiandae
            temporibus autem distinctio ipsam dicta architecto nisi iste placeat
            ullam quam nam a rem minima ipsum. Corporis voluptate dolorem quia
            id perferendis labore harum beatae excepturi ipsa neque, nisi soluta
            quas laboriosam commodi possimus accusantium obcaecati, eaque
            consequatur ut ducimus quos consequuntur inventore qui. Asperiores
            tenetur recusandae, possimus tempora atque modi necessitatibus nihil
            aspernatur minus vel consectetur deserunt mollitia facere. Maiores
            fugiat, eveniet voluptas id atque, totam architecto esse magni
            impedit suscipit, itaque tempora sequi soluta eos vel accusamus
            maxime perspiciatis quam non aut illo fugit iste ex possimus!
            Explicabo necessitatibus distinctio magni aliquid consequuntur quis.
            Aspernatur laboriosam quisquam totam labore ab minus facere odio non
            quae tempore, porro officiis ut architecto, vero magni illo?
            Perferendis, reiciendis asperiores? Rem nihil dolorum ex magni
            repellendus nulla rerum libero quidem. Illum voluptates libero
            soluta nobis ullam, saepe perspiciatis id animi repudiandae quia ad
            expedita ut, labore laboriosam explicabo consectetur neque
            distinctio, laborum totam fugiat et similique enim laudantium!
            Quibusdam cupiditate, minus aliquid autem eaque molestias,
            laudantium quisquam facilis id fugit asperiores quos aut aliquam
            saepe veniam? Dignissimos, quia voluptatem! Quibusdam, perferendis
            esse quo nisi exercitationem earum natus libero. Deserunt officiis
            saepe ratione quo excepturi aperiam ea mollitia magni molestias
            officia possimus alias veniam aspernatur sint odit impedit, totam
            vitae. Est, itaque assumenda obcaecati quam consectetur fuga animi
            architecto qui saepe, necessitatibus, voluptatem molestiae cumque.
            Atque temporibus omnis vel. Ut distinctio sapiente et quis maxime,
            in minus fugiat eaque soluta recusandae at nostrum aliquid,
            perferendis repellat nulla, dolorum a dolore quaerat reprehenderit
            fuga? Aut iure quod saepe obcaecati tempora dicta nobis numquam amet
            voluptate eligendi quidem aspernatur impedit dolorum reprehenderit
            alias id voluptatibus illo corporis, velit officia fugiat est harum
            rerum eum. Cupiditate quos rem animi eos ullam! Nesciunt ipsum
            repudiandae itaque, non dolore laborum quia pariatur ullam explicabo
            delectus minima ad totam magnam ipsa quidem et, accusantium debitis
            dicta eaque! Eum sequi aperiam tempora neque autem nisi magnam
            voluptatibus! Consequatur omnis perferendis ea placeat rem earum
            error aperiam atque in alias consequuntur at dolor ipsum vel
            sapiente architecto rerum cupiditate fuga, voluptatum facilis
            tempore. Quia quisquam placeat amet sunt repellendus. Molestiae
            maxime totam dolorem possimus sequi fugit aliquam impedit
            perspiciatis cum tempore nisi et veniam nulla placeat in voluptates,
            officiis asperiores omnis eius tenetur, eaque consectetur. Qui ullam
            corporis laboriosam ratione, perspiciatis officia voluptatem.
            Maiores minus laborum repudiandae, nemo tempora dolores voluptatibus
            ipsam blanditiis vitae in optio! Tenetur corrupti voluptatum
            deserunt, quia harum odit quidem fuga consectetur dolor quisquam
            explicabo iure sint fugit autem animi hic, quam in. Maxime,
            laudantium doloremque! Dolore iste corrupti eligendi quidem
            voluptates id. Qui sit soluta perspiciatis quae itaque, nihil sint
            dolorem, nisi quasi dolorum totam aut tempora commodi error omnis.
            Reiciendis, optio possimus nesciunt aspernatur quam labore illum
            beatae mollitia accusamus corrupti et tenetur ipsa aperiam commodi
            distinctio eos dignissimos nostrum ratione illo veniam doloremque ex
            omnis. A consequatur maiores numquam ducimus, reiciendis, quia fugit
            quibusdam dolor repellat eum eaque velit nisi dolores autem
            cupiditate culpa mollitia quisquam praesentium dolore cum aspernatur
            qui atque! Reiciendis alias, sit distinctio necessitatibus autem
            similique quia. Perspiciatis provident perferendis deserunt itaque
            nesciunt rem laudantium possimus officia. Consequatur velit
            voluptates nesciunt corrupti suscipit modi animi quis repudiandae
            officia, labore, doloribus dignissimos rem necessitatibus officiis
            impedit atque assumenda nostrum. Doloribus distinctio fugiat nobis
            natus quo praesentium vero molestiae perspiciatis porro? Dignissimos
            libero accusantium expedita, et dolorem animi, consequatur obcaecati
            temporibus quis, possimus saepe. Placeat, consectetur? Dolor optio
            repellat eos, eius quae dignissimos illum natus porro tempora minima
            fuga, totam similique sunt est corporis. Illum optio ab incidunt
            quae delectus quisquam illo quas eum placeat quaerat perspiciatis,
            pariatur excepturi autem, quia ratione architecto quos consequatur
            assumenda aspernatur facilis. Et officia amet atque voluptas
            nesciunt, iusto soluta consequatur repellat voluptates rem
            voluptatum delectus dolores laborum eveniet nisi! Nisi ab harum
            eligendi quas totam rem fugiat ea nobis, mollitia eaque eius
            accusamus aliquam reiciendis non facilis minima tempore, aperiam,
            ipsam quia. Amet explicabo mollitia voluptate eius consequatur.
        </div>
    )
}
