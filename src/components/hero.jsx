import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import backgroundImage from "../images/bg.jpg";
import { Grid, Paper } from "@mui/material";
import { Box, Container } from "@mui/system";
import InteractiveList from "./list";

export default function PageHero() {
  return (
    <Container maxWidth="xl" id="hero--container">
      <div id="text">Home</div>
      <Grid
        container
        direction="row"
        columnSpacing={6}
        justifyContent="space-around"
      >
        {/* Increase the network loading priority of the background image. */}
        <Grid
          item
          component="div"
          md={3}
          alt="increase priority"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Paper
            elevation="4"
            variant="elevation"
            component="img"
            src={backgroundImage}
            sx={{ width: "100%", borderRadius: "50%" }}
          />
        </Grid>
        <Grid
          item
          component="div"
          sm={12}
          md={7}
          sx={{
            height: "100vh",
            zIndex: "0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" component="p">
            A full-stack web developer majored in Chemistry. Having achieved a
            full-stack certificate from the University of Birmingham Coding
            Bootcamp. Adaptable and logic driven problem solver, with strong
            communication skills and experience working in collaboration or
            independently. In addition, to being a strong problem solver thanks
            to my STEM degree, which allowed me to be a fast learner.
          </Typography>
          <Paper
            elevation={3}
            variant="outlined"
            sx={{ width: "100%", margin: " 2rem 0 0rem 0" }}
          />
          <InteractiveList></InteractiveList>
        </Grid>
      </Grid>
    </Container>
  );
}
