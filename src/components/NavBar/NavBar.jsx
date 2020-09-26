import React from "react";
import {
  NavBarSection,
  NavContainer,
  Logo,
  LogoText,
  UlList,
  ListItem,
  Anchor,
} from "./NavBarStyle";

import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <NavBarSection>
      <NavContainer className="container">
        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>

        <UlList>
          <ListItem>
            <Link
              style={{
                display: "block",
                color: "#222",
                textDecoration: "none",
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingRight: "10px",
                paddingLeft: "10px",
                fontWeight: "bold",
              }}
              to="/"
            >
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Anchor to="#">Work</Anchor>
          </ListItem>
          <ListItem>
            <Anchor to="#">Portfolio</Anchor>
          </ListItem>
          <ListItem>
            <Anchor to="#">Resume</Anchor>
          </ListItem>
          <ListItem>
            <Anchor to="#">About</Anchor>
          </ListItem>
          <ListItem>
            <Link
              style={{
                display: "block",
                color: "#222",
                textDecoration: "none",
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingRight: "10px",
                paddingLeft: "10px",
                fontWeight: "bold",
              }}
              to="/contact"
            >
              Contact
            </Link>
          </ListItem>
        </UlList>
      </NavContainer>
    </NavBarSection>
  );
};

export default NavBar;
