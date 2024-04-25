import { createVar, fallbackVar, style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const backgroundColor = createVar();

export const container = style({
  display: "inline-flex",
  alignItems: "center",
  color: theme.palette.brand,
  borderRadius: "100%",

  ":hover": {
    backgroundColor: fallbackVar(backgroundColor, theme.palette.pink200),
    boxShadow: `0 0 0 ${theme.spacing.small12px} ${fallbackVar(
      backgroundColor,
      theme.palette.pink200
    )}`,
  },
});
