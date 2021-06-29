import React from "react";
import theme, { GlobalCss } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import AuthScreens from "./auth";
import AppProtectedScreens from "./AppProtectedScreen";

function App(props) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  // const history = useHistory();
  const toggleScreensViews = () => {
    setIsAuthenticated((p) => !p);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <GlobalCss />
        {isAuthenticated === true ? (
          <AppProtectedScreens onLogout={toggleScreensViews} />
        ) : (
          <AuthScreens onPressed={toggleScreensViews} />
        )}
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
