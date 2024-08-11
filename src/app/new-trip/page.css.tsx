import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export default {
  container: style({
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing.small16px,
    alignItems: "center",
  }),
};
