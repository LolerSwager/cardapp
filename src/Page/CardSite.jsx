import React, { useState } from "react"
import styled from "styled-components"
import Card from "../Components/Card"
import { CardsArray as cards } from "../Json/CardsArray"

export default function CardSite() {
    const [cardNum, setCardNum] = useState(1)

    let handleChange = (event) => {
        setCardNum(parseInt(event.target.value))
    }

    // console.log(cardNum)

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
            <h1>Kosmetiker kort app</h1>
            <StyledMenu>
                <button onClick={() => RandomRoll()}>
                    {/* Roll a random */} <i className="fa-solid fa-dice"></i>
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
    /* background-color: #1a1a1a; */
    padding: 0.6em 1.2em;
    button {
        background-color: #ff8a9e;
        color: #1a1a1a;
        border: 1px solid transparent;
        border-radius: 8px;
        transition: border-color 0.25s;
        padding: 0.6em 1em;
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
        padding: 0.6em 1em;
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
