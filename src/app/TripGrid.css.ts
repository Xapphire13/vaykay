import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "var(--spacing-medium)",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "var(--spacing-medium)",
});
