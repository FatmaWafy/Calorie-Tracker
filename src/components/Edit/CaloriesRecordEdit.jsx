/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./CaloriesRecordEdit.module.css";

function CaloriesRecordEdit(props) {
  const DEFAULT_VALUE = {
    date: "",
    meal: "Breakfast",
    content: "",
    calories: 0,
  };
  const [mealrecord, setmealrecord] = useState(DEFAULT_VALUE);

  const onDateChangeHandler = (event) => {
    setmealrecord({ ...mealrecord, date: event.target.value });
  };
  const onMealChangeHandler = (event) => {
    setmealrecord({ ...mealrecord, meal: event.target.value });
  };
  const onContentChangeHandler = (event) => {
    setmealrecord({ ...mealrecord, content: event.target.value });
  };
  const onCaloriesChangeHandler = (event) => {
    setmealrecord({ ...mealrecord, calories: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setmealrecord(DEFAULT_VALUE);
    props.onFormSubmit(mealrecord);
  };

  const OnCancelHandler = () => {
    setmealrecord(DEFAULT_VALUE);
    props.onCanccel();
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <label htmlFor='date'>Date: </label>
      <input
        id='date'
        type='date'
        value={mealrecord.date}
        onChange={onDateChangeHandler}
      />
      <label htmlFor='meal'>Meal: </label>
      <select id='meal' value={mealrecord.meal} onChange={onMealChangeHandler}>
        <option value='Breakfast'>Breakfast</option>
        <option value='Lunch'>Lunch</option>
        <option value='Dinner'>Dinner</option>
        <option value='Snack'>Snack</option>
      </select>
      <label htmlFor='content'>Content: </label>
      <input
        id='content'
        type='text'
        value={mealrecord.content}
        onChange={onContentChangeHandler}
      />
      <label htmlFor='calories'>Calories: </label>
      <input
        id='calories'
        type='number'
        value={mealrecord.calories}
        onChange={onCaloriesChangeHandler}
        // className={mealrecord.calories < 0 ? "error" : ""}
        className={`${styles["calories-input"]} ${
          mealrecord.calories < 0 ? styles.error : ""
        }`}
      />
      <div className={styles.footer}>
        <button>Add Record</button>
        <button
          className={styles.secondary}
          type='button'
          onClick={OnCancelHandler}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
export default CaloriesRecordEdit;
