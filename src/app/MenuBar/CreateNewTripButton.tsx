import React from "react";
import { PlusSquare } from "react-bootstrap-icons";
import IconButton from "../shared/IconButton";

export default function CreateNewTripButton() {
  return (
    <IconButton label="New trip" href="/new-trip">
      <PlusSquare size={32} />
    </IconButton>
  );
}
