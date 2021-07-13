import { Theme } from "./types";

const darkTheme: Theme = {
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
      textColor: "var(--light)",
      backgroundColor: "var(--black)",
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
      textColor: "var(--light)",
      backgroundColor: "var(--black)",
      drawerBackgroundColor: "var(--dark)",
    },
  },
  borderRadius: {
    subtle: "5px",
    medium: "10px",
    round: "50%",
  },
};

export default darkTheme;
