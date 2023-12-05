/* eslint-disable */
// key={record.date.toString()}

import CalorieRecord from "./CalorieRecord";
import styles from "./RecordList.module.css";
function RecordList(props) {
  return props.records?.length ? (
    <ul className={styles["record-list"]}>
      {props.records.map(
        (record) =>
          record.calories >= 0 && (
            <li className={styles["list-item"]} key={record.id}>
              <CalorieRecord
                date={record.date}
                meal={record.meal}
                content={record.content}
                calories={record.calories}
              />
            </li>
          )
      )}
    </ul>
  ) : (
    <div className={styles.placeholder}>No Records Found For This Date</div>
  );
}

export default RecordList;
