import styled from "styled-components"

export default function Footer() {
    return (
        <StyledFooter>
            <p>
                Made by <i class="fa-solid fa-heart"></i>
                <a href="https://github.com/LolerSwager" target="_blank">
                    Jannick Nielsen
                </a>
            </p>
            <p></p>
        </StyledFooter>
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
