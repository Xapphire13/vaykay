import { globalStyle, style } from "@vanilla-extract/css";
import { theme } from "../../theme.css";

export const container = style({
    background: theme.palette.white,
    border: `4px solid ${theme.palette.green400}`,
    width: "400px",
    borderRadius: theme.cornerRadius.medium,
   });

   export const titleArea = style({
    display: "flex",
    background: theme.palette.green300,
    padding: "5px",
   });

   export const addTraveler = style({
    background: theme.palette.white,
    padding: "5px",
    borderRadius: theme.cornerRadius.medium,
   });