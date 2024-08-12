import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export default {
  container: style({
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing.small8px,
  }),
};
