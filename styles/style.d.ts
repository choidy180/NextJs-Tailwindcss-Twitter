import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string,
    boxColor: string,
    textColor: string,
    accentColor: string;
    color: {
      purple: string;
      blue: string;
      gray: string;
      green: string;
      lightGreen: string;
      darkGray: string;
    };
    boxShadow: {
      normal: string;
      purple: string;
      blue: string;
    };
  }
}