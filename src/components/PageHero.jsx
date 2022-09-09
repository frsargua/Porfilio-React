import * as React from "react";

import Typography from "@mui/material/Typography";

import { Grid, Paper } from "@mui/material";

export default function PageHero() {
  return (
    <Grid item component="div" sm={12} md={6}>
      <Typography
        variant="h5"
        component="p"
        sx={{
          display: { xs: "none", md: "block" },
          position: "sticky",
          top: "35%",
          margin: "11rem 0",
        }}
      >
        A full-stack web developer majored in Chemistry. Having achieved a
        full-stack certificate from the University of Birmingham Coding
        Bootcamp. Adaptable and logic driven problem solver, with strong
        communication skills and experience working in collaboration or
        independently. In addition, to being a strong problem solver thanks to
        my STEM degree, which allowed me to be a fast learner.
      </Typography>
    </Grid>
  );
}
