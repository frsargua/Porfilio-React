import * as React from "react";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import git from "../images/logos/git.png";
import graphql from "../images/logos/graphql.png";
import html from "../images/logos/html.png";
import javascript from "../images/logos/javascript.png";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
  let skillsObs = [
    {
      show: false,
      name: "Languages",
      arr: [
        {
          name: "HTML5",
          icon: html,
        },
        {
          name: "CSS3",
          icon: html,
        },
        {
          name: "JavaScript",
          icon: javascript,
        },
      ],
    },
    {
      show: false,
      name: "Others",
      arr: [
        {
          name: "Node.js",
          icon: git,
        },
        {
          name: "Git",
          icon: git,
        },
        {
          name: "Heroku",
          icon: "../images/logos/git.png",
        },
        {
          name: "Handlebars.js",
          icon: "../images/logos/git.png",
        },
      ],
    },
    {
      show: false,

      name: "Frameworks",
      arr: [
        {
          name: "React",
          icon: git,
        },
        {
          name: "jQuery",
          icon: git,
        },
        {
          name: "Bootstrap",
          icon: git,
        },
        {
          name: "MaterialUI",
          icon: git,
        },
        {
          name: "Express.js",
          icon: git,
        },
      ],
    },
    {
      show: false,
      name: "Databases",
      arr: [
        {
          name: "MySQL",
          icon: graphql,
        },
        {
          name: "Sequelize",
          icon: graphql,
        },
        {
          name: "MongoDB",
          icon: graphql,
        },
        {
          name: "Mongoose",
          icon: graphql,
        },
        {
          name: "GraphQl",
          icon: graphql,
        },
      ],
    },
  ];

  const [skills, updateShow] = React.useState(skillsObs);

  function collapse(name) {
    updateShow((prev) => {
      return prev.map((el) => {
        if (el.name === name) {
          return { ...el, show: !el.show };
        }
        return el;
      });
    });
  }

  return (
    <Grid container sx={{ justifyContent: "center", width: "90%" }}>
      {skills.map(({ name, arr, show }) => {
        return (
          <Grid item xs={12} md={5}>
            <Typography
              sx={{ mt: 4, mb: 2 }}
              variant="h6"
              component="div"
              onClick={() => {
                collapse(name);
              }}
            >
              {name}
            </Typography>
            <Demo
              sx={{ display: { sm: show ? "block" : "none", md: "block" } }}
            >
              <List dense="true">
                {arr.map((val) => {
                  return (
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar src={val.icon} variant="circular">
                          {/* <Paper
                            elevation="4"
                            variant="elevation"
                            component="img"
                            src={val.icon}
                            sx={{
                              width: "60%",
                              borderRadius: "50%",
                              margin: { md: "auto 0" },
                            }}
                          /> */}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={val.name} />
                    </ListItem>
                  );
                })}
              </List>
            </Demo>
          </Grid>
        );
      })}
    </Grid>
  );
}
