import { theme } from "@/app/theme.css";
import { style } from "@vanilla-extract/css";

export default {
  container: style({
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing.small8px,
  }),
};
