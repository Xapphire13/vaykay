import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export const container = style({
  padding: theme.spacing.small12px,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: theme.spacing.small12px,
});
