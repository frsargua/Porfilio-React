import React from "react";
import PorfolioCard from "../PorfolioCard";
import projects from "../../porfolioData";
import { Container } from "@mui/system";
import { Grid, Stack, Typography } from "@mui/material";

export default function Porfolio() {
  return (
    <>
      <Container className="block--top__1">
        <Stack alignItems="center">
          <Typography
            variant="h2"
            component="h5"
            textAlign="center"
            sx={{ display: { xs: "block", md: "none" } }}
            gutterBottom
          >
            Porfolio
          </Typography>
          <Grid
            container
            spacing={{ xs: 5 }}
            rowGap={0}
            display="flex"
            className="block__1"
            width="100%"
            sx={{ justifyContent: { xs: "center", md: "left" } }}
          >
            {projects.largeProjects.map((el) => {
              return <PorfolioCard key={el.repoUrl} values={el}></PorfolioCard>;
            })}
            {projects.smallProjects.map((el) => {
              return <PorfolioCard key={el.repoUrl} values={el}></PorfolioCard>;
            })}
          </Grid>
        </Stack>
      </Container>
    </>
  );
}
