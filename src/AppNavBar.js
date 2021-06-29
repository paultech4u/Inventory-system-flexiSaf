import React from "react";
import { AppBar, IconButton, makeStyles } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

function AppNavBar(props) {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.container}>
      <IconButton>
        <AccountCircle />
      </IconButton>
    </AppBar>
  );
}

export default AppNavBar;

const useStyles = makeStyles(() => ({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
}));
