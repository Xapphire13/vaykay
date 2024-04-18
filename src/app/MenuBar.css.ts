import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export const container = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: theme.palette.green100,
  padding: theme.spacing.small12px,
  borderBottom: `${theme.spacing.border} solid ${theme.palette.border}`,
});

export const heading = style({
  color: theme.palette.brand,
  fontSize: theme.typography.size.extraLarge,
});

export const filters = style({
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
});
