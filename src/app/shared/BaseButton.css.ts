import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export default {
  container: style({
    border: `2px solid ${theme.palette.buttonBorder}`,
    borderRadius: theme.cornerRadius.medium,
    padding: `${theme.spacing.small4px} ${theme.spacing.small8px}`,
    fontWeight: "bold",
    boxShadow: theme.elevation.button,
  }),
};
