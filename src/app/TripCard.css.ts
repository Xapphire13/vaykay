import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export const container = style({
  paddingBottom: "0",
  borderRadius: theme.cornerRadius.medium,
  boxShadow: theme.elevation.card,
  backgroundColor: theme.palette.modalBackground,
  width: "480px",
  height: "450px",
  display: "flex",
  alignItems: "start",
  justifyContent: "center",
});

export const cardImg = style({
  borderRadius: "16px 16px 0 0",
  width: "480px",
  height: "300px",
});

export const containerContent = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const location = style({
  paddingTop: theme.spacing.small12px,
});

export const title = style({
  background: "linear-gradient(90deg, rgba(232,135,190,1) 66%, rgba(251,187,224,1) 94%)",
  color: theme.palette.pink100,
  borderRadius: "0 0 16px 16px",
  margin: "8px -16px -400px -16px",
  padding: "8px",
  width: "480px",
});

export const date = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "end",
});

export const dateArrow = style({
  padding: "0 8px",
});
