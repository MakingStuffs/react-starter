export interface Theme {
  pallette: {
    primary: string;
    secondary: string;
    tertiary: string;
    accent: string;
    black: string;
    white: string;
    dark: string;
    light: string;
    facebook: string;
    linkedin: string;
    github: string;
    fcc: string;
    stackoverflow: string;
    twitter: string;
  };
  colors: {
    main: {
      textColor: string;
      backgroundColor: string;
    };
    button: {
      primary: string;
      secondary: string;
      warning: string;
    };
    link: {
      backgroundColor: string;
    };
    modal: {
      backgroundColor: string;
      textColor: string;
      header: string;
    };
    nav: {
      backgroundColor: string;
      textColor: string;
      drawerBackgroundColor: string;
    };
  };
  spacing: {
    small: {
      x: string;
      y: string;
    };
    medium: {
      x: string;
      y: string;
    };
    large: {
      x: string;
      y: string;
    };
  };
  borderRadius: {
    subtle: string;
    medium: string;
    round: string;
  };
}

export interface ThemeInterface {
  isDark: boolean;
  toggleTheme: () => void;
  activeTheme: Theme;
}
