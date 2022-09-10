import * as React from "react";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import git from "../images/logos/git.svg";
import css from "../images/logos/css3.svg";
import nodejs from "../images/logos/nodejs.svg";
import mysql from "../images/logos/mysql.svg";
import handlerbars from "../images/logos/handlebars.svg";
import mongodb from "../images/logos/mongodb.svg";
import MaterialUI from "../images/logos/materialUI.svg";
import sequelize from "../images/logos/sequelize.svg";
import express from "../images/logos/express.svg";
import mongoose from "../images/logos/mongoose.svg";
import bootstrap from "../images/logos/bootstrap.svg";
import react from "../images/logos/react.svg";
import jquery from "../images/logos/jquery.svg";
import heroku from "../images/logos/heroku.svg";
import graphql from "../images/logos/graphql.svg";
import html from "../images/logos/html.svg";
import javascript from "../images/logos/javascript.svg";

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
          icon: css,
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
          icon: nodejs,
        },
        {
          name: "Git",
          icon: git,
        },
        {
          name: "Heroku",
          icon: heroku,
        },
        {
          name: "Handlebars.js",
          icon: handlerbars,
        },
      ],
    },
    {
      show: false,

      name: "Frameworks",
      arr: [
        {
          name: "React",
          icon: react,
        },
        {
          name: "jQuery",
          icon: jquery,
        },
        {
          name: "Bootstrap",
          icon: bootstrap,
        },
        {
          name: "MaterialUI",
          icon: MaterialUI,
        },
        {
          name: "Express.js",
          icon: express,
        },
      ],
    },
    {
      show: false,
      name: "Databases",
      arr: [
        {
          name: "MySQL",
          icon: mysql,
        },
        {
          name: "Sequelize",
          icon: sequelize,
        },
        {
          name: "MongoDB",
          icon: mongodb,
        },
        {
          name: "Mongoose",
          icon: mongoose,
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
          <Grid key={name} item xs={12} md={5}>
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
              <List dense>
                {arr.map((val) => {
                  return (
                    <ListItem key={val.name}>
                      <ListItemAvatar>
                        <Avatar src={val.icon} variant="rounded"></Avatar>
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
