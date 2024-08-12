import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export default {
  formContainer: style({
    padding: theme.spacing.small16px,
    background: theme.palette.modalBackground,
    boxShadow: theme.elevation.card,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.small16px,
    maxWidth: "500px",
    borderRadius: theme.cornerRadius.medium,
  }),
  container: style({
    padding: theme.spacing.small16px,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  buttonGroup: style({
    alignSelf: "center",
  }),
};
