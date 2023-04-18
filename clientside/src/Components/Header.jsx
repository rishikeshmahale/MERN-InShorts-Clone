import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import styled from "@emotion/styled";
import { Menu } from "@mui/icons-material";

const StyledHeader = styled(AppBar)`
  background-color: #fff;
  height: 70px;
`;

const MenuIcon = styled(Menu)`
  color: #000;
`;

const Image = styled("img")({
  height: "55px",
  margin: "auto",
  paddingRight: "70px",
});

const url =
  "https://assets.inshorts.com/website_assets/images/logo_inshorts.png";

const Header = () => {
  return (
    <>
      <StyledHeader position="static">
        <Toolbar>
          <MenuIcon />
          <Image src={url} alt="logo" />
        </Toolbar>
      </StyledHeader>
    </>
  );
};

export default Header;
