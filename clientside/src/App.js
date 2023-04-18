import React from "react";
import { Box, styled } from "@mui/material";

// Components
import Articles from "./Components/Articles";
import Header from "./Components/Header";
import InfoHeader from "./Components/InfoHeader";

const Container = styled(Box)(({ theme }) => ({

  width: "70%",
  margin: "35px auto",

  [theme.breakpoints.down('md')]: {
    width : "75%"
  },
  [theme.breakpoints.down('sm')]: {
    width : "85%"
  }
}));
  



const App = () => {
  return (
    <>
      <Header />

      <Container>
        <InfoHeader />
        <Articles />
      </Container>
    </>
  );
};

export default App;
