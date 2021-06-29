import { Route, Switch, Redirect } from "react-router-dom";
import { Box } from "@material-ui/core";
import Dashboard from "./pages/Dashboard";
import { pageRoutes } from "./constant";
import AppDrawer from "./AppDrawer";
import AppNavBar from "./AppNavBar";

function AppProtectedScreens(props) {
  return (
    <Box display="flex" height={1}>
      <AppDrawer />
      <Box display="flex" flex={1} flexDirection="column">
        <AppNavBar />
        <Switch>
          <Route exact path={pageRoutes.DASHBOARD} component={Dashboard} />
          <Redirect exact to={pageRoutes.DASHBOARD} />
        </Switch>
      </Box>
    </Box>
  );
}

export default AppProtectedScreens;
