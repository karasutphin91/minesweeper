import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  height: {
    sm: "35rem",
    md: "45rem"
  },
  width: {
    sm: "30rem",
    md: "35rem"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;