import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";

function generate(arr, element) {
  return arr.map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
  let skillsObs = [
    {
      show: false,
      name: "Languages",
      arr: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      show: false,

      name: "Others",
      arr: ["Node.js", "Git", "Heroku", "Handlebars.js"],
    },
    {
      show: false,

      name: "Frameworks",
      arr: ["React", "jQuery", "Bootstrap", "MaterialUI", "Express.js"],
    },
    {
      show: false,
      name: "Databases",
      arr: ["MySQL", "Sequelize", "MongoDB", "Mongoose", "GraphQl"],
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
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        {skills.map(({ name, arr, show }) => {
          return (
            <Grid item xs={12} md={3}>
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
                          <Avatar>
                            <FolderIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={val} />
                      </ListItem>
                    );
                  })}
                </List>
              </Demo>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
