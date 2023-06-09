import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
        width: 100vw;
        height: 100vh;
        background: linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3)), url("https://images.pexels.com/photos/5531010/pexels-photo-5531010.jpeg?auto=compress&cs=tinysrgb&w=1600") center;

        display: flex;
        align-items: center;
        justify-content: center;

`;

const Wrapper = styled.div`
        padding: 20px;
        width: 20%;
        background-color: white;
        ${mobile({width: "80%"})};

`;

const Form = styled.form`
        display: flex;
        flex-direction: column;
`;

const Title = styled.h1`
        font-size: 24px;
        font-weight: 300;
`;

const Input = styled.input`
        flex:1;
        min-width: 40%;
        margin: 10px 0;
        padding: 10px;
`;

const Button = styled.button`
        width: 40%;
        border: none;
        padding: 15px 20px;
        background-color: teal;
        cursor: pointer;
        color: white;
        margin-bottom: 5px;
`;

const Link = styled.a`
        margin: 5px 0;
        font-size: 12px;
        cursor: pointer;
        color: teal;

        &:hover{
            text-decoration: underline;
            color: black;
        }

`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="Username"/>
            <Input placeholder="Password"/>
            <Button>LOGIN</Button>
            <Link>FORGOT PASSWORD</Link>
            <Link>CREATE AN ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
