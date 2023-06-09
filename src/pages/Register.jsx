import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
        width: 100vw;
        height: 100vh;
        background: linear-gradient(rgba(255,255,255,0.1),rgba(255,255,255,0.1)), url("https://images.pexels.com/photos/4913391/pexels-photo-4913391.jpeg?auto=compress&cs=tinysrgb&w=1600") center;

        display: flex;
        align-items: center;
        justify-content: center;

`;

const Wrapper = styled.div`
        padding: 20px;
        width: 30%;
        background-color: white;
        ${mobile({width: "80%"})};

`;

const Form = styled.form`
        display: flex;
        flex-wrap: wrap;
`;

const Title = styled.h1`
        font-size: 24px;
        font-weight: 300;
`;

const Input = styled.input`
        flex:1;
        min-width: 40%;
        margin: 20px 10px 0 0;
        padding: 10px;
`;

const Agreement = styled.span`
        font-size: 16px;
        margin: 20px 0;
        ${mobile({fontSize: "12px"})};

`;

const Button = styled.button`
        width: 40%;
        border: none;
        padding: 15px 20px;
        background-color: teal;
        cursor: pointer;
        color: white;
        ${mobile({width: "100%"})};

`;


const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN UP</Title>
        <Form>
            <Input placeholder="First name"/>
            <Input placeholder="Last name"/>
            <Input placeholder="Username"/>
            <Input placeholder="Email"/>
            <Input placeholder="Password"/>
            <Input placeholder="Confirm Password"/>
            <Agreement>
                By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE ACCOUNT</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
