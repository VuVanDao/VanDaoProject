import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme.js";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  GlobalStyles,
} from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/">
    <CssVarsProvider theme={theme}>
      <GlobalStyles
        styles={{
          a: {
            textDecoration: "none",
            // color: "black",
          },
        }}
      />
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </BrowserRouter>
);
