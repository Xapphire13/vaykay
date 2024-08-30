import { globalStyle, style } from "@vanilla-extract/css";
import { theme } from "../../theme.css";

const styles = {
  container: style({
    background: theme.palette.pink500,
    borderRadius: `0 ${theme.cornerRadius.medium} ${theme.cornerRadius.medium} 0`,
    color: theme.palette.pink100,
    fontSize: theme.typography.size.large36px,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }),

  indvContainer: style({
    ":hover": {
      backgroundColor: "#8968e3",
    },
    display: "flex",
    flexDirection: "column",
    borderBottom: `medium solid ${theme.palette.pink100}`,
    padding: theme.spacing.small12px,
  }),

  icon: style({
    color: theme.palette.pink100,
  }),

  description: style({
    display: "none",
    position: "absolute",
    fontSize: theme.spacing.medium24px,
    left: "100px",
    padding: theme.spacing.small12px,
  }),

  activeTab: style({
    backgroundColor: theme.palette.pink800,
  }),
};

globalStyle(`${styles.indvContainer}:hover ${styles.description}`, {
  display: "block",
  backgroundColor: theme.palette.pink100,
  color: theme.palette.gray800,
});

export default styles;
