import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export const container = style({
  padding: "var(--spacing-large)",
  border: `var(--spacing-micro) solid ${theme.palette.border}`,
  borderRadius: "var(--corner-radius-medium)",
  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
  backgroundColor: theme.palette.modalBackground,
});
