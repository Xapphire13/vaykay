import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const container = style({
   background: theme.palette.pink500,
   padding: theme.spacing.medium32px,
   borderRadius: "0 16px 16px 0",
   color: theme.palette.pink100,
   height: "800px",
   width: "100px",
   marginTop: "125px",
   fontSize: theme.typography.size.large36px,
  });

  export const icon = style({
   color: theme.palette.pink100,
   fontSize: "40px",
  });