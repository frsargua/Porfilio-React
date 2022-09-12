import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import avatar from "../images/avatar.png";
import { Container } from "@mui/material";
import CV from "../CV.pdf";

export default function Navbar(props) {
  const [collapsed, setCollapse] = React.useState(true);
  function collapse() {
    setCollapse((prev) => !prev);
  }

  return (
    <AppBar
      position="sticky"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgb(256,256,256,0.7)",
        boxShadow: "none",
      }}
    >
      <Button
        aria-label="account of current user"
        onClick={collapse}
        sx={{
          display: { xs: "none", md: "block" },
          width: "fit-content",
          position: "relative",
          left: "2rem",
          top: "0.3rem",
          height: "100%",
        }}
      >
        <img src={avatar} alt="used avatar" style={{ height: "50px" }} />
      </Button>
      <Container maxWidth="lg">
        <Box
          sx={{
            borderRadius: "25px",
            margin: "1rem",
            padding: "0.2rem 1rem",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            backgroundColor: "#F4F6FA",
          }}
        >
          <Button
            size="small"
            aria-label="account of current user"
            color="inherit"
            onClick={collapse}
            sx={{
              display: { sm: "block", md: "none" },
              width: "fit-content",
              margin: "auto",
            }}
          >
            <img src={avatar} alt="used avatar" style={{ maxHeight: "50px" }} />
          </Button>
          <Box
            sx={{
              width: "100%",
              display: { xs: collapsed ? "none" : "flex", md: "flex" },
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-evenly",
            }}
          >
            {props.options.map((el) =>
              el !== "DOWNLOAD CV" ? (
                <Button
                  key={el}
                  onClick={() => props.handlePageChange(el)}
                  sx={{
                    ":hover": {
                      bgcolor: "rgba(255,255,255,0.1)",
                      color: "white",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    component="a"
                    href="#"
                    sx={{
                      flexGrow: 1,
                      color: "#000",
                      textDecoration: props.currentPage === el ? "" : "none",
                    }}
                  >
                    {el}
                  </Typography>
                </Button>
              ) : (
                <Button
                  key={el}
                  sx={{
                    ":hover": {
                      bgcolor: "rgba(255,255,255,0.1)",
                      color: "white",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    component="a"
                    download
                    href={CV}
                    sx={{
                      flexGrow: 1,
                      color: "#000",
                      textDecoration: props.currentPage === el ? "" : "none",
                    }}
                  >
                    {el}
                  </Typography>
                </Button>
              )
            )}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}
