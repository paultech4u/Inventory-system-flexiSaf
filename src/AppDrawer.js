import React from "react";
import clsx from "clsx";
import {
  Drawer,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  Box,
  Divider,
} from "@material-ui/core";
import BarChart from "@material-ui/icons/BarChart";
import { ListItemText } from "@material-ui/core";

function AppDrawer(props) {
  const classes = useStyles();
  return (
    <Drawer
      open={true}
      hideBackdrop={true}
      variant="permanent"
      className={classes.drawer}
      classes={{ paper: clsx(classes.drawerBgColor, classes.drawer) }}
    >
      <Box className={classes.drawerToolbar} />
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <BarChart style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BarChart style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="In Stock" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BarChart style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Order Tracking" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BarChart style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Report" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BarChart style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Order" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default AppDrawer;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 270,
  },
  drawerBgColor: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
  },
  drawerToolbar: theme.mixins.toolbar,
}));
