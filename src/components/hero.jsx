import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import backgroundImage from "../images/bg.jpg";
import { Grid, Paper } from "@mui/material";
import { Box, Container } from "@mui/system";
import InteractiveList from "./list";

export default function PageHero() {
  return (
    <Container maxWidth="xl">
      <Grid container direction="row">
        {/* Increase the network loading priority of the background image. */}
        <Grid
          item
          columnSpacing={2}
          component="div"
          md={4}
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
          md={8}
          columnSpacing={2}
          sx={{
            height: "100vh",
            objectFit: "cover",
            zIndex: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <InteractiveList></InteractiveList>
        </Grid>
      </Grid>
    </Container>
  );
}
