import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const container = style({
  display: "flex",
  flexDirection: "row",
  padding: `${theme.spacing.small16px} 0`,
  gap: theme.spacing.small16px,
});
