import { style } from "@vanilla-extract/css";

export const menu = style({
  display: "inline-block",
  position: "relative",
});

export const button = style({
  backgroundColor: "#EBFCF4",
  border: "2px solid #285A3B",
  borderRadius: "12px",
  padding: "10px 0 10px 5px",

  ":hover": {
    backgroundColor: "#FCF1F8",
  },
});

export const chevron = style({
  color: "#FEFAFD",
  height: "100%",
  borderRadius: "0 10px 10px 0",
  backgroundColor: "#C35997",
  padding: "10px",
});

export const content = style({
  display: "none",
  position: "absolute",
  overflow: "auto",
  backgroundColor: "#F7FEFA",
  borderRadius: "10px",

  selectors: {
    [`${menu}:hover &`]: {
      display: "block",
    },
  },
});

export const item = style({
  padding: "2px 0 2px 5px",

  ":hover": {
    backgroundColor: "#81D1A6",
  },
});
