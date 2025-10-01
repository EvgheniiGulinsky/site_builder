export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: {
    primary: string;
    secondary: string;
  };
}

export interface ThemeTypography {
  fontFamily: {
    primary: string;
    heading: string;
  };
  fontSize: {
    base: string;
    lg: string;
    xl: string;
  };
}

export interface ThemeConfig {
  colors: ThemeColors;
  typography: ThemeTypography;
  spacing: {
    unit: number;
    scale: number[];
  };
  borderRadius: {
    base: string;
    lg: string;
  };
}


