import { Theme } from "./types";

const lightTheme: Theme = {
  pallette: {
    black: "var(--black)",
    white: "var(--white)",
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    accent: "var(--accent)",
    dark: "var(--dark)",
    light: "var(--light)",
  },
  spacing: {
    small: {
      y: "0.25rem",
      x: "0.5rem",
    },
    medium: {
      y: "0.5rem",
      x: "1rem",
    },
    large: {
      y: "0.75rem",
      x: "1.25rem",
    },
  },
  colors: {
    main: {
      textColor: "",
      backgroundColor: "",
    },
    button: {
      primary: "var(--primary)",
      secondary: "",
      warning: "",
    },
    link: {
      backgroundColor: "",
    },
    modal: {
      backgroundColor: "",
      textColor: "",
      header: "",
    },
    nav: {
      backgroundColor: "",
      textColor: "",
      drawerBackgroundColor: "var(--black)",
    },
  },
  borderRadius: {
    subtle: "",
    medium: "",
    round: "",
  },
};

export default lightTheme;
