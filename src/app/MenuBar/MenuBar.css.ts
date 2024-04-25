import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const container = style({
  display: "grid",
  gridTemplate: `
    "spacer filters actions" auto / 1fr auto 1fr
  `,
  alignItems: "center",
  backgroundColor: theme.palette.green100,
  padding: theme.spacing.small12px,
  borderBottom: `${theme.spacing.border} solid ${theme.palette.border}`,
  flexBasis: 0,
});

export const filters = style({
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
  gridArea: "filters",
});

export const actions = style({
  gridArea: "actions",
  justifySelf: "right",
});
