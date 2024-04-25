import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const menu = style({
  display: "inline-block",
  position: "relative",
});

export const button = style({
  backgroundColor: theme.palette.green200,
  border: `${theme.spacing.border} solid ${theme.palette.buttonBorder}`,
  borderRadius: theme.cornerRadius.medium,
  display: "flex",
  alignItems: "center",
  overflow: "hidden",

  ":hover": {
    backgroundColor: theme.palette.pink200,
  },
});

export const label = style({
  padding: `0 ${theme.spacing.small12px}`,
  fontWeight: "bold",
});

export const chevron = style({
  display: "flex",
  alignItems: "center",
  color: theme.palette.pink200,
  height: "100%",
  backgroundColor: theme.palette.pink600,
  padding: theme.spacing.small12px,
});

export const content = style({
  display: "none",
  position: "absolute",
  overflow: "auto",
  backgroundColor: theme.palette.green100,
  borderRadius: theme.cornerRadius.medium,

  selectors: {
    [`${menu}:hover &`]: {
      display: "block",
    },
  },
});

export const item = style({
  padding: `${theme.spacing.small4px} ${theme.spacing.small8px}`,

  ":hover": {
    backgroundColor: theme.palette.green400,
  },
});
