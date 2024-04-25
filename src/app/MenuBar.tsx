import React from "react";
import SearchButton from "./SearchButton";
import CreateNewTripButton from "./CreateNewTripButton";
import DropDownMenu from "./DropDownMenu";
import * as styles from "./MenuBar.css";

export default function MenuBar() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Trip Library</div>

      <div className={styles.filters}>
        <DropDownMenu />
      </div>

      <div>
        <SearchButton />
        <CreateNewTripButton />
      </div>
    </div>
  );
}
