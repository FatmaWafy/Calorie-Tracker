/* eslint-disable react/prop-types */
import styles from "./CalorieRecordDate.module.css";
import "../Common/StyledRecordCell.module.css";
import StyledRecordCell from "../Common/StyledRecordCell";

const MONTHES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function CalorieRecordDate(props) {
  const month = MONTHES[props.date.getUTCMonth()];
  const day = props.date.getUTCDate();
  const year = props.date.getUTCFullYear();

  return (
    <StyledRecordCell>
      <div className={styles["record-date-month"]}>{month}</div>
      <div className={styles["record-date-day"]}>{day}</div>
      <div className={styles["record-date-year"]}>{year}</div>
    </StyledRecordCell>
  );
}
export default CalorieRecordDate;
