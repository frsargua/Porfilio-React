import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import avatar from "../images/avatar.png";
import { Container } from "@mui/material";

export default function ButtonAppBar() {
  const [collapsed, setCollapse] = React.useState(true);
  let options = ["HOME", "PORFOLIO", "ABOUT ME", "CONTACT ME"];
  function collapse() {
    setCollapse((prev) => !prev);
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
        <Button
          size="small"
          aria-label="account of current user"
          color="inherit"
          onClick={collapse}
          sx={{
            display: { sm: "none", md: "block" },
            width: "fit-content",
            position: "relative",
            left: "2rem",
            top: "0.3rem",
            height: "100%",
          }}
        >
          <img src={avatar} style={{ maxHeight: "auto" }} />
        </Button>
        <Container maxWidth="lg">
          <AppBar
            position="static"
            color="secondary"
            sx={{
              borderRadius: "25px",
              margin: "1rem",
              padding: "0.2rem 1rem",
              display: "flex",
              flexDirection: { sm: "column", md: "row" },
              backgroundColor: "black",
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
              <img src={avatar} style={{ maxHeight: "50px" }} />
            </Button>
            <Box
              sx={{
                width: "100%",
                display: { sm: collapsed ? "none" : "flex", md: "flex" },
                flexDirection: { sm: "column", md: "row" },
                justifyContent: "space-evenly",
              }}
            >
              {options.map((el) => (
                <Button
                  color="primary"
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
                    sx={{ flexGrow: 1, color: "white", textDecoration: "none" }}
                  >
                    {el}
                  </Typography>
                </Button>
              ))}
            </Box>
          </AppBar>
        </Container>
      </Box>
    </div>
  );
}
