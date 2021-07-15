import React, { Suspense } from "react";
import theme, { GlobalCss } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import AuthScreens from "./auth";
import AppProtectedScreens from "./AppProtectedScreen";
import { Loading } from "./common/LazyLoading";

function App(props) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  // const history = useHistory();
  const toggleScreensViews = () => {
    setIsAuthenticated((p) => !p);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <CssBaseline />
          <GlobalCss />
          {isAuthenticated === true ? (
            <AppProtectedScreens onLogout={toggleScreensViews} />
          ) : (
            <AuthScreens onPressed={toggleScreensViews} />
          )}
        </BrowserRouter>
      </Suspense>
    </MuiThemeProvider>
  );
}

export default App;
