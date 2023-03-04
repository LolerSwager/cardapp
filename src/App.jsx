import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Card from "./Components/Card"
import "./App.css"

//! stupid way i hate it
import image1 from "./assets/images/Billede1.png"
import image2 from "./assets/images/Billede2.jpg"
import image3 from "./assets/images/Billede3.jpg"
import image4 from "./assets/images/Billede4.jpg"
import image5 from "./assets/images/Billede5.png"
import image6 from "./assets/images/Billede6.jpg"
import image7 from "./assets/images/Billede7.jpg"
import image8 from "./assets/images/Billede8.png"
import image9 from "./assets/images/Billede9.png"
import image10 from "./assets/images/Billede10.png"
import image11 from "./assets/images/Billede11.png"
import image12 from "./assets/images/Billede12.png"

//? random til map  .sort(() => Math.random() - 0.5)

export default function App() {
    const cards = [
        {
            id: 1,
            title: "Normal hudtype",
            image: image1,
            kendetegn: [
                "Fast",
                "Klar",
                "Ingen udviddede porer eller Linjer/rynker",
                "Ingen urenheder",
                "Ingen teleangiectasia",
            ],
            Behandlingsformål: ["Rense epidermus", "Fugte epidermis", "Beskytte dermis"],
        },
        {
            id: 2,
            title: "Tør hudtype",
            image: image2,
            kendetegn: [
                "Fine linjer eller rynker",
                "Pergamentagtig overflade",
                "Små porer",
                "Comedoner og milier",
                "Farven kan være trist og grålig",
                "Føles stram",
            ],
            Behandlingsformål: [
                "Rense epidermis",
                "Dybderense periodiske anomalier",
                "Nære cellemetabolismen",
                "Fugte epidermis",
                "Beskytte dermis",
            ],
        },
        {
            id: 3,
            title: "Fedtet hudtype",
            image: image3,
            kendetegn: [
                "Blank og fedtet overflade",
                "Grov struktur med udvidede porer",
                "Ofte comedoner, pustler og pabler",
                "Virker tykkere end normal hud",
            ],
            Behandlingsformål: [
                "Rense epidermis",
                "Dybderense periodiske anomalier",
                "Ilte/stimulere cellemetabolismen",
                "Normalisere talgproduktionen",
                "Fugte epidermis",
                "Beskytte dermis",
            ],
        },
        {
            id: 4,
            title: "Kombineret hudtype",
            image: image4,
            kendetegn: [
                "T-zonen er fedtet med udvidede porer",
                "Resten af ansigtet er normal til tør",
                "Comedoner",
                "Teleangiectasia",
            ],
            Behandlingsformål: [
                "Rense epidermis",
                "Normalisere talgproduktionen",
                "Berolige immunforsvaret ",
                "Fugte epidermis",
                "Beskytte dermis",
            ],
        },
        {
            id: 5,
            title: "Sart hudtype",
            image: image5,
            kendetegn: [
                "Fin struktur med fine porer",
                "Ofte mange teleangiectasia",
                "Tendens til udtørring",
                "Comedoner og milier",
                "Virker tynd med nervespidserne tæt ved overfladen",
                "Tåler vind, sol, luft og vand dårligt",
                "Er lys og ses ofte hos rød - og lyshårede personer",
            ],
            Behandlingsformål: [
                "Rense epidermis",
                "Dybderense periodiske anomalier",
                "Dulme nervepåvirkningen",
                "Berolige immunforsvaret",
                "Fugte epidermis",
                "Beskytte dermis",
            ],
            Kontraindikationer: [
                "Mekaniske eller kraftige peelinger",
                "Nappe-, ælte, - og klappetag i massage",
                "Vakuum",
            ],
        },
        {
            id: 6,
            title: "Dehydreret hudtype",
            image: image6,
            kendetegn: [
                "Føles pergamentagtig",
                "kan skalle pletvis",
                "Meget fine linjer ved dybere udtørring",
                "Der kan forekomme lukkede comedoner",
            ],
            Behandlingsformål: [
                "Rense epidermis",
                "Dybderense periodiske anomalier",
                "Superfugte epidermis",
                "Beskytte dermis",
            ],
            Kan_skyldes: ["Fugtmangel", "Fejlbehandling", "Kost", "Medicin", "Miljø"],
        },
        {
            id: 7,
            title: "Tilstoppet hudtype",
            image: image7,
            kendetegn: ["Åbne og lukkede comedoner", "Pabler og pustler", "Evt. cicatricer", "Ujævnoverﬂade"],
            Behandlingsformål: [
                "Rense epidermis",
                "Dybderense periodiske anomalier",
                "Regulere talgproduktionen",
                "Fremme ophelingen af huden",
                "Fugte epidermis",
                "Beskytte dermis",
            ],
            Kan_skyldes: ["Hormonel ubalance", "Comedogene ingredienser", "Rygning og forurening", "Friktion"],
        },
        {
            id: 8,
            title: "Fejlbehandlet hudtype",
            image: image8,
            kendetegn: [
                "Pergamentagitg udtørring i overfladen",
                "Fedtet i dybden",
                "Finporet",
                "Mange lukkede comedoner",
                "Evt. urenheder",
                "Teleangiectasia",
            ],
            Behandlingsformål: [
                "Rense epidermis",
                "Dybderense periodiske anomalier",
                "Normalisere PH-værdien",
                "Superfugte epidermis",
                "Beskytte dermis",
            ],
            Kan_skyldes: ["Forkert behandling/produktvalg", "Manglende pleje af huden", "Vand og sæbe"],
        },
        {
            id: 9,
            title: "Sensitiv hudtype",
            image: image9,
            kendetegn: [
                "Kan være svært at se med det blotte øje (vigtig at spørge ind til hos kunden)",
                "Rød og varm, særligt på kinderne",
                "Følsom over for bl.a. varme, tryk og berøring",
            ],
            Behandlingsformål: [
                "Rense epidermis",
                "Dybderense periodiske anomalier",
                "Dulme nervepåvirkningen",
                "Berolige immunforsvaret",
                "Fugte epidermis",
                "Beskytte dermis",
            ],
            Kan_skyldes: ["Stress", "Friktion"],
        },
        {
            id: 10,
            title: "Pigmenteret hudtilstand (Macula)",
            image: image10,
            kendetegn: [
                "Macula - en velafgrænset farveændring i hudens niveau",
                "Hyperpigmentering = marcula med mere pigment end omgivelserne",
                "Hypigmentering = macula med mindre pigment end omgivelserne",
            ],
            Behandlingsformål: ["Rense epidermis", "Udligne pigmentering", "Fugte epidermis", "Beskytte dermis"],
            Kan_skyldes: ["Sol", "Hormonelt", "Post inflammatorisk", "Duftstoffer", "Medicin"],
        },
        {
            id: 11,
            title: "Atrofisk hudtilstand Aldersbetinget",
            image: image11,
            kendetegn: [
                "Grå, bleg teint",
                "Dårligt blodomløb",
                "Virker tynd",
                "Fedttør",
                "Dybde rynker og nedsat turgor",
                "Ujævn struktur",
                "Pigmentpletter (marcula)",
                "Telengiectasia",
            ],
            Behandlingsformål: [
                "Rense epidermis",
                "Dybderense periodiske anomalier",
                "Nære cellemetabolismen",
                "Stimulere blodcirkulationen",
                "Opstramme epidermis/dermis",
                "Fugte epidermis",
                "Beskytte dermis",
            ],
            Kan_skyldes: [
                "Genetik",
                "Stress",
                "Sol, rygning, frie radikaler",
                "Forkerte produkter",
                "Medicin",
                "Sol",
                "Forurening",
            ],
        },
        {
            id: 12,
            title: "Atrofisk tilstand Miljøbetinget",
            image: image12,
            kendetegn: ["Læderagtig overflade", "Store porer", "Comedoner", "Linjer/rynker og nedsat turgor "],
            Behandlingsformål: [
                "Rense epidermis",
                "Dybderense periodiske anomalier",
                "Nære cellemetabolismen",
                "Stimulere blodcirkulationen",
                "Opstramme epidermis/dermis",
                "Fugte epidermis",
                "Beskytte dermis",
            ],
            Kan_skyldes: [
                "Genetik",
                "Stress",
                "Sol, rygning, frie radikaler",
                "Forkerte produkter",
                "Medicin",
                "Sol",
                "Forurening",
            ],
        },
    ]

    const [cardNum, setCardNum] = useState(1)

    let handleChange = (event) => {
        setCardNum(parseInt(event.target.value))
    }

    console.log(cardNum)

    // den her vælger kortet
    function RenderCard() {
        if (cardNum === 0) {
            return cards.slice(0, cards.length).map((data) => <Card data={data} key={data.id} />)
        } else {
            return cards.slice(cardNum - 1, cardNum).map((data) => <Card data={data} key={data.id} />)
        }
    }

    function RandomRoll() {
        const randomNum = Math.floor(Math.random() * cards.length) + 1
        if (randomNum === cardNum) {
            RandomRoll()
        } else {
            setCardNum(randomNum)
        }
    }

    return (
        <main>
            <h1>kort app</h1>
            <StyledMenu>
                <button onClick={() => RandomRoll()}>
                    Roll a random <i className="fa-solid fa-dice"></i>
                </button>
                <select value={cardNum} onChange={handleChange}>
                    <option value={0}>show all</option>
                    {cards.map((data) => (
                        <option value={data.id} key={data.id}>
                            {data.title}
                        </option>
                    ))}
                </select>
            </StyledMenu>
            <div className="card-holder">{RenderCard()}</div>
        </main>
    )
}

const StyledMenu = styled.menu`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
    background-color: #1a1a1a;
    padding: 0.6em 1.2em;
    button {
        background-color: #ff8a9e;
        color: #1a1a1a;
        border: 1px solid transparent;
        border-radius: 8px;
        transition: border-color 0.25s;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 700;
        cursor: pointer;
        &:hover {
            border-color: #ff8a9e;
            background-color: #1a1a1a;
            color: #ff8a9e;
        }
        &:disabled {
            background-color: #1a1a1a;
            color: #6a6a6a;
            &:hover {
                border-color: #1a1a1a;
                background-color: #1a1a1a;
                color: #6a6a6a;
                cursor: default;
            }
        }
    }
    select {
        border: 1px solid transparent;
        border-radius: 8px;
        transition: border-color 0.25s;
        padding: 0.6em 1.2em;
        font-size: 1em;
        cursor: pointer;
        &:hover,
        :focus {
            border-color: #ff8a9e !important;
        }
        option {
            cursor: pointer;
            &:checked,
            :hover,
            :focus {
                background-color: #ff8a9e !important;
            }
        }
    }
`
