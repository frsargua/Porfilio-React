import ButtonGroup from "@mui/material/ButtonGroup";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { IconButton } from "@mui/material";

let arrIcons = [
  { url: "https://github.com/frsargua", html: <GitHubIcon /> },
  {
    url: "https://www.linkedin.com/in/fabiansarango/gi",
    html: <LinkedInIcon />,
  },
  { url: "tel:+00447542351359", html: <CallIcon /> },
  { url: "mailto:frsargua@gmail.com", html: <EmailIcon /> },
];

function SideBar() {
  return (
    <>
      <ButtonGroup
        sx={{ position: "fixed", top: "40%", paddingX: "1rem" }}
        orientation="vertical"
        variant="contained"
      >
        {arrIcons.map((el) => {
          return (
            <IconButton
              sx={{ display: { xs: "none", md: "block" } }}
              edge="end"
              LinkComponent="a"
              target="_blank"
              href={el.url}
            >
              {el.html}
            </IconButton>
          );
        })}
      </ButtonGroup>
    </>
  );
}

export default SideBar;
