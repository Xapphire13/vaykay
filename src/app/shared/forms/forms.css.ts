import { theme } from "@/app/theme.css";
import { style } from "@vanilla-extract/css";

export default {
  hint: style({
    fontWeight: "lighter",
    fontSize: theme.typography.size.small14px,
    color: theme.palette.gray500,
    marginTop: `calc(0px - ${theme.spacing.small4px})`,
  }),
};
