import React from 'react'
import Footer from '../components/Footer'
import "./MainPage.css"

function MainPage() {
    return (
        <div className="MainPage">
            <div className="container mb-5">
                <div className="d-flex row align-items-center">

                    <div className="ProfileImgBox col-12 col-lg-4">
                        <img
                            className=""
                            src="https://profile-images.xing.com/images/16f7e540ce9eeff4b55aacbde51bedcf-1/konrad-mayer.1024x1024.jpg">
                        </img>
                    </div>

                    <div className="p-5 col-12  col-lg-8">
                        <span className="code">var name =</span>
                        <div>
                            <h1>Konrad Mayer</h1>
                            <span className="code">return ( {"<"}  <span className="code-component">MeinPortfolio</span> <span className="code-prop">isCool</span> {">"}</span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container mb-5 mt-5">
                <h2 className="text-center mb-5">{"<MeineProfile>"}</h2>
                <div className="">
                    {links.map((i, k) =>
                        <LinkBox {...i} key={k} />)}
                </div>
                <h2 style={{ opacity: 0.25 }} className="text-center mb-5">{"</MeineProfile>"}</h2>
            </div>

            <div style={{ marginTop: 128, marginBottom: 128, }} className="container">
                <h2 className="text-center mb-5">{"<Beschreibung>"}</h2>
                <p className="text-center">Ich bin <b>{+ _calculateAge(new Date("02.17.2001"))}</b> Jahre alt und komme aus Grünberg, einer Kleinstadt in Mittelhessen.</p>
                <h2 style={{ opacity: 0.25 }} className="text-center mb-5">{"</Beschreibung>"}</h2>
            </div>

            <div className="container">
                <span className="code pl-4">{"</"}  <span className="code-component">MeinPortfolio</span> {">"} ); </span>
                <span className="code">{"} else { "}</span>
                <span className="code">{"return <"}  <span className="code-component">Loader/</span> {">"}</span>
            </div>

            <Footer />

        </div>
    )
}

export default MainPage

const links = [
    {
        url: "https://www.instagram.com/derkonreifen",
        title: "Instagram",
        name: "@derkonreifen",
        icon: <i class="fab fa-instagram"></i>,
    },
    {
        url: "https://www.xing.com/profile/Konrad_Mayer12/cv",
        title: "Xing",
        name: "Konrad Mayer",
        icon: <i class="fab fa-xing"></i>,
    },
    {
        url: "https://github.com/orgs/dashdesign-eu/people/konipro",
        title: "GitHub",
        name: "@konipro",
        icon: <i class="fab fa-github"></i>,
    },
    {
        url: "https://dashdesign.eu/",
        title: "Unternehmen",
        name: "dashdesign e.K.",
        icon: <i class="fad fa-building"></i>,
    },
    {
        url: "mailto:konrad@dashdesign.eu",
        title: "E-Mail",
        name: "konrad@dashdesign.eu",
        icon: <i class="fad fa-mailbox"></i>,
    },
    {
        url: "",
        title: "Facebook",
        name: "Inaktiv",
        icon: <i class="fab fa-facebook"></i>,
    }
]

function LinkBox(props) {
    return (
        <a href={props.url} target="_blank">
            <div className="LinkBox">
                <div className="icon">
                    {props.icon}
                </div>
                <div>
                    <span className="title">{props.title}:</span>
                    <span className="name">{props.name}</span>
                </div>
            </div>
        </a>
    )
}

function _calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}