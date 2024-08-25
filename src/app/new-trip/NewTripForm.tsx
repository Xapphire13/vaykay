"use client";
import { useState } from "react";
import DateRange from "../shared/forms/DateRange";
import InputList from "../shared/forms/InputList";
import PrimaryButton from "../shared/PrimaryButton";
import createNewTrip from "../database/trips";
import styles from "./NewTripForm.css";
import useLocationSearch from "./useLocationSearch";
import { countries } from "countries-list";
import Input from "../shared/forms/Input";
import { Checkbox } from "@nextui-org/checkbox";

export default function NewTripForm() {
  const locationSearch = useLocationSearch();
  const [datesAreKnown, setDatesAreKnown] = useState(true);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  const handleDatesUnsureChanged = (isChecked: boolean) => {
    setDatesAreKnown(!isChecked);
  };

  return (
    <form className={styles.container} action={createNewTrip}>
      <Input
        required
        label="Name your trip"
        name="name"
        placeholder="Ex. Best vaycay ever!"
      />

      <div className={styles.dateRangeRow}>
        <DateRange
          name="dates"
          label="When is it?"
          isDisabled={!datesAreKnown}
        />
        <Checkbox
          className={styles.dateRangeCheckbox}
          onValueChange={handleDatesUnsureChanged}
        >
          Unsure
        </Checkbox>
      </div>

      <InputList
        id="locations"
        label="Where are you going?"
        placeholder="Search..."
        provideSearchResults={locationSearch}
        values={selectedCountries}
        onValuesChanged={setSelectedCountries}
      />
      <input
        type="hidden"
        name="countries"
        value={selectedCountries
          .map(
            (countryName) =>
              Object.entries(countries).find(
                ([, { name }]) => name === countryName
              )?.[0]
          )
          .join(", ")}
      />

      <InputList
        id="party"
        label="Who are you going with?"
        placeholder="Enter email..."
        values={[]}
        onValuesChanged={() => {}}
      />

      <PrimaryButton className={styles.submitButton} type="submit">
        Submit
      </PrimaryButton>
    </form>
  );
}
