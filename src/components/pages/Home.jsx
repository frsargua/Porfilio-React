import { Container, Grid, Typography, Paper } from "@mui/material";
import PageHero from "../PageHero";
import InteractiveList from "../InteractiveList";
import backgroundImage from "../../images/bg.jpg";
import "../../App.css";

export default function Home() {
  return (
    <Container>
      <Grid container className="block--bottom__1">
        <Grid
          items
          md={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Paper
            elevation="4"
            variant="elevation"
            component="img"
            src={backgroundImage}
            sx={{
              width: "50%",
              borderRadius: "50%",
              margin: { sm: "5rem 0", md: "11rem 0" },
            }}
          />
          <Typography
            variant="h5"
            component="p"
            sx={{
              display: { sm: "block", md: "none" },
              margin: { sm: "5rem 0" },
            }}
          >
            A full-stack web developer majored in Chemistry. Having achieved a
            full-stack certificate from the University of Birmingham Coding
            Bootcamp. Adaptable and logic driven problem solver, with strong
            communication skills and experience working in collaboration or
            independently. In addition, to being a strong problem solver thanks
            to my STEM degree, which allowed me to be a fast learner.
          </Typography>
          <Typography variant="h2" textAlign="center" sx={{}}>
            My skills
          </Typography>
          <InteractiveList></InteractiveList>
        </Grid>
        <PageHero></PageHero>
      </Grid>
    </Container>
  );
}
