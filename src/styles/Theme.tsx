import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./defaultTheme";

type IThemeProps = {
  children: React.ReactNode;
};

export const Theme = ({ children }: IThemeProps) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};
