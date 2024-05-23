import { globalStyle, style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const container = style({
   background: theme.palette.pink500,
   padding: theme.spacing.medium32px,
   borderRadius: "0 16px 16px 0",
   color: theme.palette.pink100,
   //height: "800px",
   width: "100px",
   marginTop: "125px",
   fontSize: theme.typography.size.large36px,
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   justifyContent: "center",
  });

  export const indvContainer = style({
   ":hover": {
      backgroundColor: "#8968e3",
    },
  });

  export const icon = style({
   color: theme.palette.pink100,
   height: "64px",
   width: "64px",
   paddingTop: theme.spacing.small16px,
   paddingBottom: theme.spacing.small8px,
  });

  export const line = style({
   borderTop: `1px solid ${theme.palette.pink100}`,
   width: "100px",
  
  });

  export const description = style({
   display: "none",
   position: "absolute",
   fontSize: theme.spacing.medium24px,
   left: "100px",
   padding: theme.spacing.small12px,
  });

  globalStyle(`${indvContainer}:hover ${description}`, {
   display: "block",
   backgroundColor: theme.palette.pink100,
   color: theme.palette.gray800,
  });


  