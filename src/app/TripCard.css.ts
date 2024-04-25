import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export const container = style({
  padding: theme.spacing.small16px,
  border: `${theme.spacing.border} solid ${theme.palette.border}`,
  borderRadius: theme.cornerRadius.medium,
  boxShadow: theme.elevation.card,
  backgroundColor: theme.palette.modalBackground,
});
