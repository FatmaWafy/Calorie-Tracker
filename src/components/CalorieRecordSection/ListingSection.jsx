/* eslint-disable react/prop-types */
import RecordList from "./RecordList";
import styles from "./ListingSection.module.css";
import { useState } from "react";

function ListingSection(props) {
  const { allRecords } = props;
  const [currentDate, setCurrentDate] = useState(new Date());
  const dateChangeHandler = (event) => {
    setCurrentDate(new Date(event.target.value));
  };

  const dateFilter = (record) => {
    return (
      record.date.getDate() === currentDate.getDate() &&
      record.date.getMonth() === currentDate.getMonth() &&
      record.date.getFullYear() === currentDate.getFullYear()
    );
  };
  return (
    <>
      <label className={styles["listing-picker-label"]} htmlFor='listingdate'>
        Select date
      </label>
      <input
        type='date'
        className={styles["listing-picker-input"]}
        id='listingdate'
        value={currentDate.toISOString().split("T")[0]}
        onChange={dateChangeHandler}
      />
      <RecordList records={allRecords.filter(dateFilter)} />
    </>
  );
}

export default ListingSection;
