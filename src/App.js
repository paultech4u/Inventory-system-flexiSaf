import React from "react";
import theme, { GlobalCss } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import AuthScreens from "./auth";
import AppProtectedScreens from "./AppProtectedScreen";

function App(props) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  // const history = useHistory();
  const navigateToMainScreen = () => {
    setIsAuthenticated((p) => !p);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <GlobalCss />
        {isAuthenticated === true ? (
          <AppProtectedScreens />
        ) : (
          <AuthScreens onPressed={navigateToMainScreen} />
        )}
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
