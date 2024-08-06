import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { Nav } from 'react-bootstrap';

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  background-color: black;
  margin-top: 20px;
  border-radius: 20px;
  box-shadow: 5px 1px 5px 5px red;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;


const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 230px;
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;
  margin-left: 30px;
`;

const List = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;
  

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  color: white;
  text-decoration: none;

`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function handelSubmit() {
  console.log("handelSubmit");
}

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem as={Link} to="/hero">Hero</ListItem>
            <ListItem as={Link} to="/who">Who</ListItem>
            <ListItem as={Link} to="/works">Works</ListItem>
            <ListItem as={Link} to="/contact">Contact</ListItem>
          </List>
        </Links>

        {/* <Nav Link as={Link} to="/hero">
          hero
        </Nav>
        <Nav Link as={Link} to="/who">
          who
        </Nav>
        <Nav Link as={Link} to="/contact">
          conatct
        </Nav>
        <Nav Link as={Link} to="/works">
          woek
        </Nav> */}

        <Icons>
          {/* Changed the image due to copyright problems */}
          <Icon src="./img/search.png" />
          <Button onClick={handelSubmit}>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
