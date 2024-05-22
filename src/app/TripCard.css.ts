import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export const container = style({
  borderRadius: theme.cornerRadius.medium,
  boxShadow: theme.elevation.card,
  backgroundColor: theme.palette.modalBackground,
  width: "480px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: theme.spacing.small16px,
  overflow: "hidden",
});

export const cardImg = style({
  width: "480px",
  height: "300px",
});

export const details = style({
  fontSize: theme.typography.size.large20px
});

export const title = style({
  background: `linear-gradient(to right, ${theme.palette.pink500}, ${theme.palette.pink400})`,
  color: theme.palette.pink100,
  padding: theme.spacing.small8px,
  width: "480px",
  fontWeight: "bold",
  fontSize: theme.typography.size.large24px
});

export const date = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: 'center',
  alignItems: "center",
  gap: theme.spacing.small8px,
  fontWeight: 600,
  fontSize: theme.typography.size.large20px
});
