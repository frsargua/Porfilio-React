import * as React from "react";
import EmailIcon from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";

import { Box, Grid } from "@mui/material";

export default function PageHero() {
  return (
    <Grid item component="div" sm={12} md={6}>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "sticky",
          top: "35%",
          margin: "11rem 0",
        }}
      >
        <Typography variant="h5" component="p" gutterBottom>
          A full-stack web developer majored in Chemistry. Having achieved a
          full-stack certificate from the University of Birmingham Coding
          Bootcamp. Adaptable and logic driven problem solver, with strong
          communication skills and experience working in collaboration or
          independently. In addition, to being a strong problem solver thanks to
          my STEM degree, which allowed me to be a fast learner.
        </Typography>
        <Typography
          variant="h6"
          component="a"
          href="mailto:frsargua@gmail.com"
          sx={{
            textDecoration: "none",
            color: "gray",
            display: "flex",
            alignItems: "center",
          }}
        >
          <EmailIcon sx={{ pr: "0.5rem", color: "purple" }} />
          frsargua@gmail.com
        </Typography>
      </Box>
    </Grid>
  );
}
