import { ThemeProvider } from "styled-components"

type IThemeProps = {
  children: React.ReactNode;
}

export const defaultTheme = {
  color: '#ffffff',
  backgroundColor: '#1a1a1a'
}

export const Theme = ({ children }: IThemeProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      {children}
    </ThemeProvider>
  );
};