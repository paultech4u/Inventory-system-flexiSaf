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
  ListItemText,
  Button,
} from "@material-ui/core";
import BarChart from "@material-ui/icons/BarChart";
import Receipt from "@material-ui/icons/Receipt";
import Assessment from "@material-ui/icons/Assessment";
import Room from "@material-ui/icons/Room";
import Storage from "@material-ui/icons/Storage";
import Store from "@material-ui/icons/Store";
import { useHistory, useLocation } from "react-router-dom";

function AppDrawer(props) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const drawerItems = React.useMemo(() => drawerListItem, []);

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
      <Box
        display="flex"
        flexDirection="column"
        flex={1}
      >
        <Box flex={2}>
          <List>
            {drawerItems.map(({ primary, icon, href }) => (
              <ListItem
                button
                onClick={() => history.push(href)}
                className={clsx({
                  [classes.drawerItemActive]: location.pathname === href,
                })}
                key={primary}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={primary} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center" flex={1}>
          <Button
            color="secondary"
            variant="contained"
            onClick={props.onLogout}
          >
            Log out
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}

const drawerListItem = [
  {
    primary: "Dashboard",
    icon: <BarChart style={{ color: "white" }} />,
    href: "/dashboard",
  },
  {
    primary: "In Stock",
    icon: <Store style={{ color: "white" }} />,
    href: "/stock",
  },
  {
    primary: "Order",
    icon: <Receipt style={{ color: "white" }} />,
    href: "/orders",
  },
  {
    primary: "Order Tracking",
    icon: <Room style={{ color: "white" }} />,
    href: "/tracked-orders",
  },
  {
    primary: "Catalog Management",
    icon: <Storage style={{ color: "white" }} />,
    href: "/catalog",
  },
  {
    primary: "Report",
    icon: <Assessment style={{ color: "white" }} />,
    href: "/reports",
  },
];

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
  drawerItemActive: {
    backgroundColor: theme.palette.secondary.light,
  },
}));
