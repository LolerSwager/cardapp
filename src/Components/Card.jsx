import { useEffect, useState } from "react"

import styled from "styled-components"

export default function Card({ data }) {
    const [flipCard, setFlipCard] = useState(false)
    const [primeColor, setPrimeColor] = useState()
    const [primeSymbol, setPrimeSymbol] = useState()

    useEffect(() => {
        if (data.collection === 1) {
            setPrimeColor("#ff8a9e")
            setPrimeSymbol("\f004")
        }
        if (data.collection === 2) {
            setPrimeColor("#09d2f6")
            setPrimeSymbol("\f005")
        }
    }, [])

    return (
        <StyledCard>
            <CardFront
                showCard={flipCard}
                onClick={() => {
                    flipCard ? setFlipCard(false) : setFlipCard(true)
                }}
            >
                <img src={data.image} alt="somthing" />
                <h2>{data.title}</h2>
            </CardFront>
            <CardBack
                showCard={flipCard}
                TheColor={primeColor}
                theSymbol={primeSymbol}
                onClick={() => {
                    flipCard ? setFlipCard(false) : setFlipCard(true)
                }}
            >
                <h2>{data.title}</h2>
                {data.kendetegn && (
                    <>
                        <h3>kendetegn</h3>
                        <ul>
                            {data.kendetegn.map((context) => (
                                <li key={context}>{context}</li>
                            ))}
                        </ul>
                    </>
                )}
                {data.Behandlingsformål && (
                    <>
                        <h3>Behandlingsformål</h3>
                        <ul>
                            {data.Behandlingsformål.map((context) => (
                                <li key={context}>{context}</li>
                            ))}
                        </ul>
                    </>
                )}
                {data.Kontraindikationer && (
                    <>
                        <h3>Kontraindikationer</h3>
                        <ul>
                            {data.Kontraindikationer.map((context) => (
                                <li key={context}>{context}</li>
                            ))}
                        </ul>
                    </>
                )}
                {data.Kan_skyldes && (
                    <>
                        <h3>Kan skyldes</h3>
                        <ul>
                            {data.Kan_skyldes.map((context) => (
                                <li key={context}>{context}</li>
                            ))}
                        </ul>
                    </>
                )}

                {data.Unknown && (
                    <>
                        <ul>
                            {data.Unknown.map((context) => (
                                <li key={context}>{context}</li>
                            ))}
                        </ul>
                    </>
                )}
            </CardBack>
        </StyledCard>
    )
}

const StyledCard = styled.article`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
`

const CardFront = styled.section`
    display: ${(props) => (props.showCard ? "none" : "unset")};
    width: 100%;
    max-width: 600px;
    h2 {
        background-color: #070707b9;
        width: 100%;
        padding: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    img {
        width: 100%;
        object-fit: cover;
        margin: 0 0 -5px 0;
    }
`

const CardBack = styled.section`
    display: ${(props) => (props.showCard ? "unset" : "none")};
    border: 1px solid ${(props) => props.TheColor};
    width: 100%;
    max-width: 600px;
    h2 {
        width: 100%;
        padding: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    h3 {
        margin: 0 1rem;
    }
    ul {
        margin: 0 0 1rem 2rem;
        li {
            list-style-type: none;
            &::before {
                font-family: "Font Awesome 5 Free";
                content: "${(props) => props.theSymbol}";
                font-weight: 500;
                color: ${(props) => props.TheColor};
                display: inline-block;
                width: 1em;
                margin: 0 0.5rem 0 0;
            }
            &:hover {
                &::before {
                    font-family: "Font Awesome 5 Free";
                    content: "${(props) => props.theSymbol}";
                    font-weight: 500;
                    color: ${(props) => props.TheColor};
                    display: inline-block;
                    width: 1em;
                    margin: 0 0.5rem 0 0;
                    font: var(--fa-font-solid);
                }
            }
        }
    }
`
