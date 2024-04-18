import { createGlobalTheme, createVar, globalStyle } from "@vanilla-extract/css";

const pink900 = createVar();
const pink800 = createVar();
const pink700 = createVar();
const pink600 = createVar();
const pink500 = createVar();
const pink400 = createVar();
const pink300 = createVar();
const pink200 = createVar();
const pink100 = createVar();
const green900 = createVar();
const green800 = createVar();
const green700 = createVar();
const green600 = createVar();
const green500 = createVar();
const green400 = createVar();
const green300 = createVar();
const green200 = createVar();
const green100 = createVar();
const gray900 = createVar();
const gray800 = createVar();
const gray700 = createVar();
const gray600 = createVar();
const gray500 = createVar();
const gray400 = createVar();
const gray300 = createVar();
const gray200 = createVar();
const gray100 = createVar();

globalStyle(":root", {
  vars: {
    [pink900]: 'hsl(326, 84%, 15%)',
    [pink800]: 'hsl(326, 62%, 25%)',
    [pink700]: 'hsl(326, 68%, 36%)',
    [pink600]: 'hsl(326, 62%, 45%)',
    [pink500]: 'hsl(326, 59%, 57%)',
    [pink400]: 'hsl(326, 68%, 72%)',
    [pink300]: 'hsl(326, 89%, 86%)',
    [pink200]: 'hsl(326, 100%, 97%)',
    [pink100]: 'hsl(326, 100%, 99%)',

    [green900]: 'hsl(154, 92%, 10%)',
    [green800]: 'hsl(154, 79%, 15%)',
    [green700]: 'hsl(154, 78%, 20%)',
    [green600]: 'hsl(154, 75%, 25%)',
    [green500]: 'hsl(154, 73%, 34%)',
    [green400]: 'hsl(154, 74%, 61%)',
    [green300]: 'hsl(154, 79%, 87%)',
    [green200]: 'hsl(153, 85%, 95%)',
    [green100]: 'hsl(150, 80%, 98%)',

    [gray900]: "hsl(0, 0%, 16%)",
    [gray800]: "hsl(0, 0%, 28%)",
    [gray700]: "hsl(0, 0%, 33%)",
    [gray600]: "hsl(0, 0%, 41%)",
    [gray500]: "hsl(0, 0%, 50%)",
    [gray400]: "hsl(0, 0%, 61%)",
    [gray300]: "hsl(0, 0%, 78%)",
    [gray200]: "hsl(0, 0%, 88%)",
    [gray100]: "hsl(0, 0%, 98%)",
  }
})

export const theme = createGlobalTheme(":root", {
  palette: {
    pink900,
    pink800,
    pink700,
    pink600,
    pink500,
    pink400,
    pink300,
    pink200,
    pink100,
    green900,
    green800,
    green700,
    green600,
    green500,
    green400,
    green300,
    green200,
    green100,
    gray900,
    gray800,
    gray700,
    gray600,
    gray500,
    gray400,
    gray300,
    gray200,
    gray100,

    brand: pink500,
    background: green200,
    modalBackground: green100,
    border: pink500,
    buttonBorder: green500,
    white: "#FFF"
  }
});

globalStyle("*", {
  boxSizing: "border-box",
  padding: 0,
  margin: 0
});

globalStyle("html, body", {
  maxWidth: "100vw",
  height: "100%",
  overflowX: "hidden",
});

globalStyle("html", {
  fontFamily: '"Concert One", sans-serif',
  fontWeight: 400,
  fontStyle: "normal",
});

globalStyle("body", {
  backgroundColor: theme.palette.background
})

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
})

globalStyle("button", {
  background: "none",
  border: "none",
  cursor: "pointer",
})