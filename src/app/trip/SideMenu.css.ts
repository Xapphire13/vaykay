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
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   justifyContent: "center",
  });

  export const icon = style({
   color: theme.palette.pink100,
   height: "64px",
   width: "64px",
   paddingTop: theme.spacing.small16px,
   paddingBottom: theme.spacing.small8px,
  });

  export const line = style({
   border: `2px solid ${theme.palette.pink100}`,
   width: "100px",
  
  });