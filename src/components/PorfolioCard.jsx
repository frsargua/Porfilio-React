import {
  Typography,
  Card,
  ButtonGroup,
  Button,
  CardMedia,
  Grid,
  CardContent,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function PorfolioCard({ values }) {
  return (
    <Grid
      item
      xs={12}
      md={6}
      lg={4}
      component="div"
      height={{ xs: "450px", md: "400px" }}
    >
      <Card
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "90%",
            width: "100%",
          }}
        >
          <Stack>
            <CardMedia
              component="img"
              height="160px"
              image={require("../images/" + values.imageUrl)}
              alt="green iguana"
              sx={{ marginBottom: "1rem", objectFit: "contain" }}
            />
            <Typography
              gutterBottom
              variant="h5"
              component="h3"
              textAlign="center"
            >
              {values.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginRight: "2rem" }}
            >
              {values.description}
            </Typography>
          </Stack>
          <ButtonGroup sx={{ marginX: "auto" }}>
            <Button component="a" href={values.repoUrl} target="_blank">
              Repo
            </Button>
            <Button component="a" href={values.deployed} target="_blank">
              Deployed
            </Button>
          </ButtonGroup>
        </CardContent>
      </Card>
    </Grid>
  );
}
