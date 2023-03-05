import { useNavigate, Link } from "react-router-dom"
import styled from "styled-components"

export default function Home() {
    const wlp = window.location.pathname
    const navigate = useNavigate()

    return (
        <ErrorPage>
            <div>
                <h1>
                    Siden "<span>{wlp}</span>" blev ikke fundet
                </h1>
                <div>
                    <a onClick={() => navigate(-1)}>Gå tilbage til den sidste side</a>
                    <Link to="/">Gå til forsiden</Link>
                </div>
            </div>
        </ErrorPage>
    )
}

const ErrorPage = styled.main`
    display: grid;
    place-items: center;
    background-color: #1a1a1a;
    h1 {
        margin: 1rem;
    }
    a {
        background-color: #ff8a9e;
        color: #1a1a1a;
        border: 1px solid transparent;
        border-radius: 8px;
        transition: border-color 0.25s;
        padding: 0.6em 1em;
        margin: 0 0 0 1rem;
        font-size: 1em;
        font-weight: 700;
        text-decoration: none;
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
`
