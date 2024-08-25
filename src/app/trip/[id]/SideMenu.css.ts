import { globalStyle, style } from "@vanilla-extract/css";
import { theme } from "../../theme.css";

export const container = style({
  background: theme.palette.pink500,
  borderRadius: `0 ${theme.cornerRadius.medium} ${theme.cornerRadius.medium} 0`,
  color: theme.palette.pink100,
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
  display: "flex",
  flexDirection: "column",
  borderBottom: `medium solid ${theme.palette.pink100}`,
  padding: theme.spacing.small12px,
});

export const icon = style({
  color: theme.palette.pink100,
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
