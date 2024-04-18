import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export const container = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: theme.palette.green100,
  padding: "var(--spacing-medium)",
  borderBottom: `var(--spacing-micro) solid ${theme.palette.border}`,
});

export const heading = style({
  color: theme.palette.brand,
  fontSize: "var(--font-size-extra-large)",
});

export const filters = style({
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
});
