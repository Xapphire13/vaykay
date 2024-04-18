import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";


export const container = style({
  fontSize: "var(--font-size-large)",
  display: "flex",
  flexDirection: "row",
});

export const brand =  style({
  backgroundColor: theme.palette.brand,
  color: theme.palette.white,
  padding: "var(--spacing-large)",
  borderRight: `var(--spacing-tiny) solid ${theme.palette.white}`,
  fontWeight: "bold",
});

export const content = style({
  flexGrow: 1,
  backgroundColor: theme.palette.green500,
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  color: theme.palette.white,
  padding: "var(--spacing-large)",
});