import styled from "styled-components";

const Container = styled.div`
    background-color: rgb(0, 128, 70);
    height: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
`

export default function Announcements() {
    return(
        <Container>
            Super Deals!! Get 1 item free on shopping over $10,000!!!
        </Container>
    )
}