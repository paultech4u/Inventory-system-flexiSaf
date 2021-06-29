import React from "react";
import { Box, AppBar, IconButton, makeStyles } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import SearchRounded from "@material-ui/icons/SearchRounded";
import Notifications from "@material-ui/icons/Notifications";

function AppNavBar(props) {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.container}>
      <Box>
        <IconButton>
          <SearchRounded fontSize="large" style={{ color: "white" }} />
        </IconButton>
      </Box>
      <Box>
        <IconButton>
          <Notifications fontSize="large" style={{ color: "white" }} />
        </IconButton>
      </Box>
      <Box>
        <IconButton>
          <AccountCircle fontSize="large" style={{ color: "white" }} />
        </IconButton>
      </Box>
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
