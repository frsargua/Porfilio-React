import { Container } from "@mui/system";
import React from "react";
import Box from "@mui/material/Box";
import { useForm } from "@formspree/react";
import {
  Button,
  Card,
  CardContent,
  Chip,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact(props) {
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
        <Button
          onClick={() => {
            props.handlePageChange("home");
          }}
          variant="contained"
          color="warning"
        >
          Return to Homepage
        </Button>
      </Container>
    );
  }

  return (
    <>
      <Container
        sx={{
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" fontWeight="500" sx={{ marginBottom: "4rem" }}>
          Want to know more? Drop me an email
        </Typography>

        <Link
          href="mailto:frsargua@gmail.com"
          sx={{
            textDecoration: "none",
            marginBottom: "1.5rem",
          }}
        >
          <Chip
            icon={<EmailIcon />}
            label="Frsargua@gmail.com"
            onClick
            color="secondary"
            sx={{ height: "40px", paddingX: "1rem" }}
          />
        </Link>

        <Card>
          <CardContent sx={{ padding: "2rem" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: 500,
                maxWidth: "100%",
                "& > :not(style)": { m: 1 },
              }}
              component="form"
              autoComplete
              onSubmit={handleSubmit}
            >
              <TextField
                fullWidth
                name="name"
                type="text"
                label="Name"
                variant="standard"
                required
              />
              <TextField
                fullWidth
                name="email"
                type="email"
                label="Email"
                variant="standard"
                required
              />
              <TextField
                fullWidth
                name="message"
                label="Write your enquire here!"
                multiline
                minRows={3}
                variant="filled"
              />

              <Button
                type="submit"
                variant="contained"
                color="error"
                disabled={state.submitting}
              >
                Submit
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
