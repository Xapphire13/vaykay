import { style } from "@vanilla-extract/css";
import { backgroundColor } from "../shared/IconButton.css";
import { theme } from "../theme.css";

export const container = style({
  vars: {
    [backgroundColor]: theme.palette.gray200,
  },
});
