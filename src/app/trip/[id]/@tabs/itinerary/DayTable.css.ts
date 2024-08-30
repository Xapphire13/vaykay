import { theme } from "@/app/theme.css";
import { style } from "@vanilla-extract/css";

export default {
  topContent: style({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  durationTimes: style({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.small4px,
  }),
};
