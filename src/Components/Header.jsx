import styled from "styled-components"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Header() {
    const [burgerMenu, setBurgerMenu] = useState(false)
    return (
        <StyledHeader>
            <nav>
                <div>
                    <h1>Anita Berg</h1>
                    <i
                        class={burgerMenu === false ? "fa-solid fa-bars" : "fa-solid fa-x"}
                        onClick={() => setBurgerMenu(!burgerMenu)}
                    ></i>
                </div>
                <StyledUl burgerMenuShow={burgerMenu} onClick={() => setBurgerMenu(!burgerMenu)}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="card">Card</Link>
                    </li>
                </StyledUl>
            </nav>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: #1a1a1a;

    nav {
        background-color: #070707ee;
        div {
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            i {
                font-size: 2em;
                transition: ease-in-out 1s;
            }
        }
        ul {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: fixed;
            min-height: 100%;
            width: 100%;
            background-color: #070707fc;
            li {
                text-align: center;
                list-style: none;
                padding: 0.5rem;
                a {
                    padding: .5rem;
                    color: #ffffff;
                    text-decoration: none;
                    font-size: 1.3em;
                }
            }
        }
    }
`

const StyledUl = styled.ul`
    display: ${(props) => (props.burgerMenuShow ? "flex" : "none")};
`
