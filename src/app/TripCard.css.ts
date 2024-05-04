import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export const container = style({
  padding: theme.spacing.small16px,
  borderRadius: theme.cornerRadius.medium,
  boxShadow: theme.elevation.card,
  backgroundColor: theme.palette.modalBackground,
});

export const title = style({
  backgroundImage: "linear-gradient(to bottom right, #E887BE, #FBBBE0)",
  color: theme.palette.pink100,
  borderRadius: "0 0 15px 15px",
  margin: "0 -16px -16px -16px",
  padding: "8px",
});

export const date = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

export const dateArrow = style({
  padding: "0 8px",
});
