"use client";
import { useState } from "react";
import Checkbox from "../shared/forms/Checkbox";
import DateRange from "../shared/forms/DateRange";
import Input from "../shared/forms/Input";
import InputList from "../shared/forms/InputList";
import formStyles from "../shared/forms/forms.css";
import PrimaryButton from "../shared/PrimaryButton";
import createNewTrip from "../database/trips";
import styles from "./NewTripForm.css";

export default function NewTripForm() {
  const [showDateRange, setShowDateRange] = useState(true);

  const handleDatesUnsureChanged = (isChecked: boolean) => {
    setShowDateRange(!isChecked);
  };

  return (
    <form className={styles.container} action={createNewTrip}>
      <Input
        required
        label="Name your trip"
        name="name"
        placeholder="Ex. Best vaycay ever!"
      />

      <div>
        <div className={formStyles.label}>When is it?</div>
        {showDateRange && <DateRange name="dates" />}
        <Checkbox label="Unsure" onChange={handleDatesUnsureChanged} />
      </div>

      <InputList
        label="Where are you going?"
        hint="Don't worry if you're unsure, you can add this later"
        placeholder="Search..."
      />

      <InputList
        label="Who are you going with?"
        hint="Don't worry if you're unsure, you can add this later"
        placeholder="Enter email..."
      />

      <PrimaryButton className={styles.submitButton} type="submit">
        Submit
      </PrimaryButton>
    </form>
  );
}
