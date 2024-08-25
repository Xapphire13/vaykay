import {  style } from "@vanilla-extract/css";
import { theme } from "../../../../theme.css";

export const container = style({
    background: theme.palette.white,
    border: `4px solid ${theme.palette.green400}`,
    width: "425px",
    borderRadius: theme.cornerRadius.medium,
    boxShadow: "1.4px 2.9px 2.9px hsl(0deg 0% 0% / 0.46)", 
   });

   export const titleArea = style({
    display: "flex",
    gap: "125px", 
    background: theme.palette.green300,
    padding: "10px",
   });

   export const addTraveler = style({
    ":hover": {
      backgroundColor: theme.palette.pink300,
    },
    background: theme.palette.white,
    borderRadius: "50%",
    height: "40px",
    width: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   });

   export const plusSign = style({
    height: "20px",
    width: "20px",
   });

   export const tableHead = style({
    background: theme.palette.pink200,
   });

   export const tableRow = style({
    ":hover": {
        backgroundColor: theme.palette.pink300,
      },
   });
