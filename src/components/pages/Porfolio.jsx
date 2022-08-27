import React from "react";
import PorfolioCard from "../card";
import { largeProjects, smallProjects } from "../../porfolioData";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

export default function Porfolio() {
  return (
    <>
      <h1>Porfolio</h1>
      <Container>
        <Grid
          container
          spacing={7}
          rowGap={4}
          display="flex"
          className="block__1"
          width="100%"
          sx={{ justifyContent: { sm: "center", md: "left" } }}
        >
          {smallProjects.map((el) => {
            return <PorfolioCard values={el}></PorfolioCard>;
          })}
        </Grid>
      </Container>
    </>
  );
}
