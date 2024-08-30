import { theme } from "@/app/theme.css";
import { style } from "@vanilla-extract/css";

export default {
  tableContainer: style({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.small8px,
  }),
};
