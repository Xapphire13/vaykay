import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export default {
  container: style({
    boxShadow: theme.elevation.card,
    backgroundColor: theme.palette.modalBackground,
    width: "480px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: theme.spacing.small16px,
  }),

  body: style({
    padding: 0,
  }),

  cardImg: style({
    width: "480px",
    height: "300px",
  }),

  details: style({
    fontSize: theme.typography.size.large20px,
    textAlign: "center",
  }),

  title: style({
    background: `linear-gradient(to right, ${theme.palette.pink500}, ${theme.palette.pink400})`,
    color: theme.palette.pink100,
    padding: theme.spacing.small8px,
    width: "480px",
    fontWeight: "bold",
    fontSize: theme.typography.size.large24px,
    textAlign: "center",
  }),

  date: style({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing.small8px,
    fontWeight: 600,
    fontSize: theme.typography.size.large20px,
  }),
};
