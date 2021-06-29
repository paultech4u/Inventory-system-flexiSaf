import { Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import { Box } from "@material-ui/core";

function AuthScreens(props) {
  return (
    <Box height={1} display="flex" flexDirection="column">
      <Switch>
        <Route exact path="/login" component={() => LoginForm(props)} />
        <Redirect exact to="/login" />
      </Switch>
    </Box>
  );
}

export default AuthScreens;
