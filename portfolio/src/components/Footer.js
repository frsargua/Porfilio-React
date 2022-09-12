import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Footer() {
  const theme = createTheme({
    palette: {
      whitePrimary: {
        main: "#000",
      },
    },
  });

  let arrIcons = [
    { url: "https://github.com/frsargua", html: <GitHubIcon /> },
    {
      url: "https://www.linkedin.com/in/fabiansarango/gi",
      html: <LinkedInIcon />,
    },
    { url: "tel:+00447542351359", html: <CallIcon /> },
    { url: "mailto:frsargua@gmail.com", html: <EmailIcon /> },
  ];
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        className="bg__primary"
        position="fixed"
        sx={{
          display: { sx: "block", md: "none" },
          bottom: "0",
          top: "auto",
          backgroundColor: "#F4F6FA",
          height: "55px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          {arrIcons.map((el) => {
            return (
              <IconButton
                key={el.url}
                size="s"
                edge="start"
                color="whitePrimary"
                LinkComponent="a"
                target="_blank"
                href={el.url}
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                {el.html}
              </IconButton>
            );
          })}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
