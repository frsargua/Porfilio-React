import { Container } from "@mui/system";
import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, FormControl, Input, InputLabel } from "@mui/material";

export default function Home() {
  const [formData, setName] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (event) => {
    let { name, value } = event.target;
    setName((prev) => {
      return { ...prev, name: value };
    });
  };
  return (
    <>
      <Container display="flex" alignItems="center" sx={{ height: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: 500,
            height: "100%",
            maxWidth: "100%",
            "& > :not(style)": { m: 1 },
          }}
          marginX="auto"
          component="form"
          noValidate
          autoComplete="off"
        >
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="component-simple">Name</InputLabel>
            <Input
              id="component-simple"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="component-simple">Email</InputLabel>
            <Input
              id="component-simple"
              value={formData.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="component-simple">Email</InputLabel>
            <Input
              multiline
              minRows={3}
              id="component-simple"
              value={formData.message}
              onChange={handleChange}
            />
          </FormControl>
          <Button>Submit</Button>
        </Box>
      </Container>
    </>
  );
}
