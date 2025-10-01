import React, { createContext, useContext } from 'react';
import { ThemeConfig } from './types';

const ThemeContext = createContext<ThemeConfig | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  theme: ThemeConfig;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  const cssVars = {
    '--color-primary': theme.colors.primary,
    '--color-secondary': theme.colors.secondary,
    '--color-background': theme.colors.background,
    '--color-text-primary': theme.colors.text.primary,
    '--color-text-secondary': theme.colors.text.secondary,
    '--font-primary': theme.typography.fontFamily.primary,
    '--font-heading': theme.typography.fontFamily.heading,
    '--radius-base': theme.borderRadius.base,
  } as React.CSSProperties;

  return (
    <ThemeContext.Provider value={theme}>
      <div style={cssVars}>{children}</div>
    </ThemeContext.Provider>
  );
};


