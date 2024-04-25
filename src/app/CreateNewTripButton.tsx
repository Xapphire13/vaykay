import React from "react";
import { PlusSquare } from "react-bootstrap-icons";

export default function CreateNewTripButton() {
  return (
    <button name="create_new_trip">
      <PlusSquare size={32} color="#d2509a" />
    </button>
  );
}
