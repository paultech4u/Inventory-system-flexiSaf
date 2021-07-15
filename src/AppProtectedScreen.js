import { Route, Switch, Redirect } from "react-router-dom";
import { Box, makeStyles } from "@material-ui/core";
import { pageRoutes } from "./constant";
import { lazyload } from "./common/LazyLoading";
import AppDrawer from "./AppDrawer";
import AppNavBar from "./AppNavBar";

const Dashboard = lazyload(() => import("./pages/Dashboard"));
const Reports = lazyload(() => import("./pages/Reports"));
const Stocks = lazyload(() => import("./pages/stocks/Stocks"));
const Orders = lazyload(() => import("./pages/order/Orders"));

function AppProtectedScreens(props) {
  const classes = useStyles();
  return (
    <Box display="flex" height={1}>
      <AppDrawer onLogout={props.onLogout} />
      <Box display="flex" flex={1} flexDirection="column">
        <AppNavBar />
        <Box className={classes.main}>
          <Switch>
            <Route exact path={pageRoutes.DASHBOARD} component={Dashboard} />
            <Route exact path={pageRoutes.REPORT} component={Reports} />
            <Route exact path={pageRoutes.STOCK} component={Stocks} />
            <Route exact path={pageRoutes.ORDER} component={Orders} />
            <Redirect exact to={pageRoutes.DASHBOARD} />
          </Switch>
        </Box>
      </Box>
    </Box>
  );
}

export default AppProtectedScreens;

const useStyles = makeStyles(() => ({
  main: {
    overflowY: "auto",
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
}));
