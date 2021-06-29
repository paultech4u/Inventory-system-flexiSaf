import React from "react";
import {
  Box,
  Paper,
  makeStyles,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { useFormik } from "formik";

function LoginForm(props) {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  });
  return (
    <Box className={classes.container}>
      <Paper className={classes.content}>
        <Box display="flex" justifyContent="center" m={10}>
          <Typography variant="h5">LOGIN</Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <Box mb={10}>
            <TextField
              id="email"
              variant="outlined"
              placeholder="Email or Username"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </Box>
          <Box>
            <TextField
              id="password"
              variant="outlined"
              placeholder="Password"
              label="Password"
              value={formik.values.password}
              onInput={formik.handleChange}
            />
          </Box>
          <Box mt={5} display="flex" justifyContent="center">
            <Button variant="contained" color="primary" onClick={props.onPressed}>
              Login
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default LoginForm;

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  content: {
    padding: 15,
  },
}));
