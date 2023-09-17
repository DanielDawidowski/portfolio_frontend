import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { globalStyles } from "./components/styles/variables";
import App from "./App.tsx";
import { GlobalStyles } from "./components/styles/globalStyles.ts";
import { TypographyStyles } from "./components/styles/typographyStyles.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={globalStyles}>
    <React.StrictMode>
      <GlobalStyles />
      <TypographyStyles />
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
