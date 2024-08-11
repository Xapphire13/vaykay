import { style } from "@vanilla-extract/css";
import iconButtonStyles from "../shared/IconButton.css";
import { theme } from "../theme.css";

export const container = style({
  vars: {
    [iconButtonStyles.backgroundColor]: theme.palette.gray200,
  },
});
