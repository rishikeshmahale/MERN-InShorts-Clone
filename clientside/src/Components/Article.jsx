import React from 'react';
import { Card, CardContent, Grid, Typography, styled } from "@mui/material";

const Component = styled(Card)`
  margin: 30px 0;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 /16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  padding: 0;
`;

const Container = styled(CardContent)`
padding: 8px;
padding-bottom: 4px !important;
`;

const Text = styled(Typography)`

font-size: 20px;
font-weight: 700;
color: #44444d;
font-family: 'Roboto', sans-serif;
line-height: 27px;
`

const Image = styled('img')({
    height: "268px",
    width: "88%",
    objectFit: "cover",
    borderRadius: "4px",
});

const RightContainer = styled(Grid)(({ theme }) => ({
  margin: "5px 0 0 -15px",
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.between('sm' , "lg")]: {
    padding : "0 5px",
  },
  [theme.breakpoints.down('sm')]: {
    margin : "5px 0"
  }
}));
 

const Author = styled(Typography)`
  color : #808290;
  font-size: 12px;
  line-height: 22px;
  margin: 3px 0;
`;

const Description = styled(Typography)`
   line-height: 22px;
   color: #44444d;
   margin: 6px 0;
   font-weight: 300;
`;

const Publisher = styled(Typography)`
  font-size: 12px;
  margin-top: auto;
  margin-bottom: 10px;
`;

const Link = styled('a')({
    textDecoration: "none",
    color: "#000",
    margin: "0 3px",
    fontWeight : "bold"
})

const Article = ({title,description,url,link,author,timestamp,publisher}) => {
  return (
      <Component>
          <Container>
              <Grid container>
                  <Grid lg={5} sm={5} xs={12} item>
                      <Image src={url} alt="" />
                  </Grid>

                  <RightContainer lg={7} md={7} xs={12} item>
                      <Text>{title}</Text>

                      <Author><b>Short</b> by {author} / {new Date(timestamp).toDateString()}</Author>

                      <Description>{description}</Description>
                      
                      <Publisher>read more at <Link href={link} target="_blank">{publisher}</Link></Publisher>
                  </RightContainer>
              </Grid>
          </Container>
    </Component>
  )
}

export default Article
