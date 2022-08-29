import { Container } from "@mui/system";
import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { useForm } from "@formspree/react";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import Home from "./Home";

export default function Contact() {
  const [formData, setName] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 100;
        }
        const diff = Math.random() * 15;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    if (timer === 100) {
      console.log("hi");
      return <Home></Home>;
    }
  }, []);

  const [state, handleSubmit] = useForm("xgedgbow");
  if (state.succeeded) {
    return (
      <Container
        maxWidth="lg"
        sx={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" textAlign="center" gutterBottom>
          Thank you for reaching out!
        </Typography>
        <Box sx={{ width: "70%", marginTop: "3rem" }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
      </Container>
    );
  }

  const handleChange = (event) => {
    let { name, value } = event.target;
    setName((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
      <Container
        sx={{
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: 500,
            maxWidth: "100%",
            "& > :not(style)": { m: 1 },
            padding: "2rem",
            border: "1px solid rgb(191, 191, 191)",
            borderRadius: "10px",
          }}
          marginX="auto"
          component="form"
          noValidate
          autoComplete="off"
        >
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="text">Name</InputLabel>
            <Input
              id="component-simple"
              name="name"
              required
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="component-simple"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="textArea">Message</InputLabel>
            <Input
              multiline
              minRows={3}
              name="message"
              id="component-simple"
              value={formData.message}
              onChange={handleChange}
            />
          </FormControl>
          <Button type="submit" disabled={state.submitting}>
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
}
