import { Container, Grid, Typography, Paper, Toolbar } from "@mui/material";
import PageHero from "../PageHero";
import InteractiveList from "../InteractiveList";
import backgroundImage from "../../images/bg.jpg";
import "../../App.css";
import { Box } from "@mui/system";

export default function Home() {
  return (
    <Container>
      <Grid container className="block--bottom__1">
        <Grid
          item
          md={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            style={{
              height: "80vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: { md: "20vh" },
            }}
          >
            <Box
              sx={{
                background: 'url("/img/bg.jpg")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: { xs: "300px", md: "s400px" },
                height: { xs: "300px", md: "s400px" },
                order: 1,
                justifySelf: "center",
                boxShadow: "inset 0 0 0 12px rgb(255 255 255/30%)",
                animation: "profile__image__animate 8s ease-in-out infinite 1s",
              }}
            ></Box>
            {/* <Paper
              elevation={4}
              variant="elevation"
              component="img"
              src={backgroundImage}
              sx={{
                width: "60%",
                borderRadius: "50%",
                margin: { md: "auto 0" },
              }}
            /> */}
          </Box>
          <Typography
            variant="h5"
            component="p"
            sx={{
              display: { xs: "block", md: "none" },
              margin: { xs: "5rem 0" },
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
