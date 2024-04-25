import React from "react";
import { Search } from "react-bootstrap-icons";
import IconButton from "../shared/IconButton";

export default function SearchButton() {
  return (
    <IconButton>
      <Search size={32} />
    </IconButton>
  );
}
