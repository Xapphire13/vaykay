import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export default {
  container: style({
    background: theme.palette.green200,
    border: `2px solid ${theme.palette.buttonBorder}`,
    borderRadius: theme.cornerRadius.medium,
    padding: `${theme.spacing.small4px} ${theme.spacing.small8px}`,
    fontWeight: "bold",
    ":hover": {
      background: theme.palette.pink200,
    },
  }),
};
