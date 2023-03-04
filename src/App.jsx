import React, { useState } from "react"
import styled from "styled-components"
import "./App.css"
import CardSite from "./Page/CardSite"

export default function App() {
    return (
        <>
            <CardSite />
            <StyledFooter>
                <p>
                    made by <i class="fa-solid fa-heart"></i>{" "}
                    <a href="https://github.com/LolerSwager">Jannick Nielsen</a>
                </p>
            </StyledFooter>
        </>
    )
}

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem;
    p {
        i {
            margin: 0 0.5rem;
            color: #ff8a9e;
        }
        a {
            color: #ffffffde;
            &:hover {
                color: #ff8a9e;
            }
        }
    }
`
