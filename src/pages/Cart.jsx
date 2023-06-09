import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../Responsive";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: "10px"})};

`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.h1`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" ? "none" : "2px solid teal"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" ? "white" : "black"};

    &:hover {
        opacity: ${props=>props.type === "filled" && "0.8"};
        color: ${props=>props.type !== "filled" && "white"};
        background-color: ${props=>props.type !== "filled" && "teal"};
    }
`;

const TopTexts = styled.div`
    ${mobile({display: "none"})};

`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
    font-size: 18px;
    font-weight: 300;

    &:hover {
        color: teal;
    }
`;

const Bottom = styled.h1`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})};

`;

const Info = styled.div`
    font-size: 18px;
    font-weight: 300;
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    border: 1px solid black;
    padding: 10px;
    width: 95%;

    ${mobile({flexDirection: "column"})};


    &:hover{
        box-shadow: 5px 10px #88888888;
        transition: all 0.3s ease-in-out;
        transform: translate(-2px, -2px);
    }
`;

const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmountButton = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: "5px 15px"})};

`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;

`;


const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: ${props=>props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Summary = styled.div`
    font-size: 18px;
    font-weight: 300;
    flex: 1;
    border: 0.5px solid lightgray;
    padding: 20px;
    height: 50vh;
    margin-top: 20px;
`;

const SummaryTitle = styled.h1`
    font-weight: 300;
`;

const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    height: 3rem;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    border: none;

    &:hover{
        opacity: 0.8;
    }
`;

const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcements/>
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping Cart(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetails>
                        <Image src="https://m.media-amazon.com/images/I/71MaGTXl7ML._UY606_.jpg"/>
                        <Details>
                            <ProductName><b>Product: </b>Lymio Casual Shirt</ProductName>
                            <ProductId><b>ID: </b>8453126</ProductId>
                            <ProductColor color="rgb(204, 191, 140)"/>
                            <ProductSize><b>Size: </b>32</ProductSize>
                        </Details>
                    </ProductDetails>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <ProductAmountButton>
                                <Remove/>
                            </ProductAmountButton>
                            <ProductAmount>2</ProductAmount>
                            <ProductAmountButton>
                                <Add/>
                            </ProductAmountButton>
                        </ProductAmountContainer>
                        <ProductPrice>$30</ProductPrice>
                    </PriceDetail>
                </Product>
                <Product>
                    <ProductDetails>
                        <Image src="https://m.media-amazon.com/images/I/61Xv6ytnYiL._AC_UL320_.jpg"/>
                        <Details>
                            <ProductName><b>Product: </b>Dhruvi Shirt For Men</ProductName>
                            <ProductId><b>ID: </b>465213</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size: </b>38</ProductSize>
                        </Details>
                    </ProductDetails>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <ProductAmountButton>
                                <Remove/>
                            </ProductAmountButton>
                            <ProductAmount>2</ProductAmount>
                            <ProductAmountButton>
                                <Add/>
                            </ProductAmountButton>
                        </ProductAmountContainer>
                        <ProductPrice>$25</ProductPrice>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$55</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>$-5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>$55</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  );
};

export default Cart;
