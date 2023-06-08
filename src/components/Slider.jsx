import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import styled from "styled-components";
import modelImg from "../images/model-red.jpg";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #FFBFA0;
    position: relative;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #616163;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    cursor: pointer;
    opacity: 0.7;

    top:0;
    bottom: 0;
    left: ${props=> props.direction==="left" && "10px"};
    right: ${props=> props.direction==="right" && "10px"};
    margin: auto;
`

const Wrapper = styled.div`
    height: 100%;
`
const Slide = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
`
const ImgContainer = styled.div`
    flex:1;
    height: 100%;
`
const Image = styled.img`
    height: 100%;
`
const InfoContainer = styled.div`
    flex:1;
    padding:50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`


export default function Slider() {
    return(
        <Container>
            <Arrow direction="left">
                <KeyboardArrowLeft/>
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src={modelImg}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Desc>GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
                        <Button>SHOW ME</Button>
                    </InfoContainer>
                </Slide>
                <Slide>
                    <ImgContainer>
                        <Image src="../images/model-red.jpg"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Desc>GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
                        <Button>SHOW ME</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right">
                <KeyboardArrowRight/>
            </Arrow>
        </Container>
    )
}