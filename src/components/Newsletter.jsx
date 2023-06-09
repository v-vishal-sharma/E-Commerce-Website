import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 70px;
    margin: 20px;
`;

const Desc = styled.div`
    font-weight: 300;
    font-size: 24px;
    margin-bottom: 20px;
    ${mobile({textAlign: "center", fontSize: "16px"})};

`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({width: "80%"})};

`;

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
    ${mobile({flex: "2"})};
    
`;

export default function Newsletter() {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Subscribe to out newsletter to stay updated on your favourite produts. </Desc>
        <InputContainer>
            <Input placeholder="your email"/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  );
};
