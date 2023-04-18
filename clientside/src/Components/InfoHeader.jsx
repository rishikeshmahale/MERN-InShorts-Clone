import React from "react";
import { Box, Typography, styled } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#f44336",
  height: "48px",
  display: 'flex',
  justifyContent: "space-around",
  alignItems: "center",

  [theme.breakpoints.down('md')]: {
    display : 'none',
  }
}));

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 300;
`;

const ImageContainer = styled(Box)`
  display: flex;
  gap: 1rem;
`

const Image = styled("img")({
  height: "35px",
});


const InfoHeader = () => {
  
  const applestore =
    "https://assets.inshorts.com/website_assets/images/appstore.png";
  const playstore =
    "https://assets.inshorts.com/website_assets/images/playstore.png";

  return (
    <>
      <Container>
        <Text>For the best experience use inshorts app on your smartphone</Text>

        <ImageContainer>
          <Image src={applestore} alt="applestore" />
          <Image src={playstore} alt="playstore" />
        </ImageContainer>
      </Container>
    </>
  );
};

export default InfoHeader;
