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
  let languagesArr = ["HTML5", "CSS3", "JavaScript"];
  let OthersArr = ["Node.js", "Git", "Heroku", "Handlebars.js"];
  let frameworksArr = [
    "React",
    "jQuery",
    "Bootstrap",
    "MaterialUI",
    "Express.js",
  ];
  let DatabasesArr = ["MySQL", "Sequelize", "MongoDB", "Mongoose", "GraphQl"];
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            LANGUAGES
          </Typography>
          <Demo>
            <List dense={dense}>
              {languagesArr.map((el) => {
                return (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={el}
                      secondary={secondary ? "Secondary text" : null}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Demo>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            OTHER
          </Typography>
          <Demo>
            <List dense={dense}>
              {OthersArr.map((el) => {
                return (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={el}
                      secondary={secondary ? "Secondary text" : null}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Demo>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            DATABASES
          </Typography>
          <Demo>
            <List dense={dense}>
              {DatabasesArr.map((el) => {
                return (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={el}
                      secondary={secondary ? "Secondary text" : null}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Demo>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            FRAMEWORKS
          </Typography>
          <Demo>
            <List dense={dense}>
              {frameworksArr.map((el) => {
                return (
                  <ListItem>
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={el}
                      secondary={secondary ? "Secondary text" : null}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
