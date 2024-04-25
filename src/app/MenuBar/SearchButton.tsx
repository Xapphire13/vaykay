import React from "react";
import { Search } from "react-bootstrap-icons";

export default function SearchButton() {
  return (
    <button name="search">
      <Search size={32} color="#d2509a" />
    </button>
  );
}
