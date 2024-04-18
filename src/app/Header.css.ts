import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";


export const container = style({
  fontSize: theme.typography.size.large,
  display: "flex",
  flexDirection: "row",
});

export const brand =  style({
  backgroundColor: theme.palette.brand,
  color: theme.palette.white,
  padding: theme.spacing.small16px,
  borderRight: `${theme.spacing.small4px} solid ${theme.palette.white}`,
  fontWeight: "bold",
});

export const content = style({
  flexGrow: 1,
  backgroundColor: theme.palette.green500,
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  color: theme.palette.white,
  padding: theme.spacing.small16px,
});