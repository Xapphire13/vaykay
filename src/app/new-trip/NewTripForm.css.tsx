import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export default {
  container: style({
    background: theme.palette.modalBackground,
    borderRadius: theme.cornerRadius.medium,
    padding: theme.spacing.small16px,
    boxShadow: theme.elevation.card,
    minWidth: "500px",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.small16px,
  }),
  submitButton: style({
    alignSelf: "center",
  }),
};
