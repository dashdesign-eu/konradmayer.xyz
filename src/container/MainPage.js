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
                        <div>
                            <h1>Konrad Mayer</h1>
                        </div>

                    </div>
                </div>
            </div>



            <div className="container mb-5 mt-5">
                <h2 className="text-center mb-5">{"Kontaktdaten:"}</h2>
                <div className="">
                    {links.map((i, k) =>
                        <LinkBox {...i} key={k} />)}
                </div>

            </div>




            <Footer />



        </div>
    )
}

export default MainPage

const links = [
    {
        url: "#",
        title: "Kontakt Speichern",
        name: "Konrad Mayer",
        icon: <i className="fad fa-address-card"></i>,
        download: true,
    },
    {
        url: "https://www.linkedin.com/in/konrad-mayer-17a332134/",
        title: "LinkedIn",
        name: "Konrad Mayer",
        icon: <i class="fab fa-linkedin"></i>,
    },
    {
        url: "https://www.instagram.com/derkonreifen",
        title: "Instagram",
        name: "@derkonreifen",
        icon: <i class="fab fa-instagram"></i>,
    },
    {
        url: "https://hessenapp.de",
        title: "Mein Unternehmen",
        name: "Hessen App GmbH",
        icon: <i class="fad fa-building"></i>,
    },
    {
        url: "mailto:konrad.mayer@hessenapp.de",
        title: "E-Mail",
        name: "konrad.mayer@hessenapp.de",
        icon: <i class="fad fa-mailbox"></i>,
    },
]
function LinkBox(props) {
    const handleDownload = () => {
        if (props.download) {
            const vCardData = `
            BEGIN:VCARD
            VERSION:3.0
            FN:Konrad Mayer
            N:Mayer;Konrad;;;
            ORG:Hessen App GmbH
            EMAIL:konrad.mayer@hessenapp.de
            TEL:+4915901427689
            URL:https://hessenapp.de
            NOTE:Softwareentwickler, App-Entwickler und Webentwickler | Mittelhessen-App | Krasser Typ, da muss ich mal investieren!! ;) 
            END:VCARD
            `;

            const blob = new Blob([vCardData], { type: 'text/vcard' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Konrad_Mayer.vcf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    return (
        <a href={props.url} target="_blank" onClick={handleDownload}>
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

function _calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970) || "21";
}