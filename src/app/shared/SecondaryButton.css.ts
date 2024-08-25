import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export default {
  container: style({
    borderColor: theme.palette.green500,
    color: theme.palette.green500,

    ":hover": {
      borderColor: theme.palette.green400,
      color: theme.palette.green400,
    },
  }),
};
