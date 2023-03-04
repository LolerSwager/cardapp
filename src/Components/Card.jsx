import { useState } from "react"

import styled from "styled-components"

export default function Card({ data }) {
    const [flipCard, setFlipCard] = useState(false)
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
            </CardBack>
        </StyledCard>
    )
}

const StyledCard = styled.article`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const CardFront = styled.section`
    display: ${(props) => (props.showCard ? "none" : "unset")};
    position: relative;
    width: 100%;
    h2 {
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #070707b9;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img {
        width: 100%;
        object-fit: cover;
    }
`

const CardBack = styled.section`
    display: ${(props) => (props.showCard ? "unset" : "none")};
    h3 {
        margin: 1rem;
    }
`
