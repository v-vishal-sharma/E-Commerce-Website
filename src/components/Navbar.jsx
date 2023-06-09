import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import {mobile} from "../Responsive";

const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px"})};
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: "10px 0"})};

`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})};

`

const SearchContainer = styled.div`
    border: 1px black;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border-bottom: 2px solid rgb(0, 128, 70);
    border-top: none;
    border-left: none;
    border-right: none;
    ${mobile({width: "50px"})};

`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize: "24px"})};

`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({justifyContent: "center", flex: "2"})};

`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    cursor: pointer;
    ${mobile({fontSize: "12px", marginLeft: "10px"})};


    &:hover {
      text-decoration: underline;
      color: teal;
    }
`

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search'/>
            <Search style={{color:"rgb(0, 128, 70)", fontSize: 16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>BENI</Logo>
        </Center>
        <Right>

          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="success">
              <ShoppingCartOutlined/>
            </Badge>
          </MenuItem>

        </Right>
      </Wrapper>
    </Container>
  )
}
