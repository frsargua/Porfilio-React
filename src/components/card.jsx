import {
  Paper,
  Typography,
  Card,
  CardContent,
  CardMedia,
  ButtonGroup,
  Button,
  Grid,
} from "@mui/material";
import React from "react";
import Img from "../images/stayHaven.png";

export default function PorfolioCard({ values }) {
  return (
    <Grid item sm={10} md={6} lg={4} component="div" height="430px">
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          padding: "1rem",
        }}
      >
        <CardMedia
          component="img"
          height="180px"
          image={Img}
          alt="green iguana"
          sx={{ marginBottom: "1rem" }}
        />
        <Typography gutterBottom variant="h5" component="h3" textAlign="center">
          {values.title}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {values.description}
        </Typography>
        <ButtonGroup
          // variant="outlined"
          // color="secondary"
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "auto",
          }}
        >
          <Button>Repo</Button>
          <Button>Deployed</Button>
        </ButtonGroup>
      </Card>
    </Grid>
  );
}
