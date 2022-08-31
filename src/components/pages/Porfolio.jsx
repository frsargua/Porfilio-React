import React from "react";
import PorfolioCard from "../card";
import projects from "../../porfolioData";
import { Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";

export default function Porfolio() {
  return (
    <>
      <Container className="block--top__1">
        <Typography variant="h2" component="h5" textAlign="center" gutterBottom>
          Porfolio
        </Typography>
        <Grid
          container
          spacing={7}
          rowGap={4}
          display="flex"
          className="block__1"
          width="100%"
          sx={{ justifyContent: { sm: "center", md: "left" } }}
        >
          {projects.largeProjects.map((el) => {
            return <PorfolioCard key={el.repoUrl} values={el}></PorfolioCard>;
          })}
          {projects.smallProjects.map((el) => {
            return <PorfolioCard key={el.repoUrl} values={el}></PorfolioCard>;
          })}
        </Grid>
      </Container>
    </>
  );
}
