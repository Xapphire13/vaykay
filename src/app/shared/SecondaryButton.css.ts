import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export default {
  container: style({
    borderColor: theme.palette.gray500,
    ":hover": {
      color: theme.palette.pink500,
      background: theme.palette.pink200,
      borderColor: theme.palette.pink500,
    },
  }),
};
