import React from "react";
import { PlusSquare } from "react-bootstrap-icons";
import IconButton from "../shared/IconButton";

export default function CreateNewTripButton() {
  return (
    <IconButton>
      <PlusSquare size={32} />
    </IconButton>
  );
}
