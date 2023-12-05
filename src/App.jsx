/* eslint-disable no-use-before-define */

import { useState } from "react";
import ListingSection from "./components/CalorieRecordSection/ListingSection";
import CaloriesRecordEdit from "./components/Edit/CaloriesRecordEdit";
import Modal from "react-modal";
import styles from "./App.module.css";

const INITIAL_RECORDS = [
  {
    id: 1,
    date: new Date(2023, 9, 14),
    meal: "Breakfast",
    content: "Eggs",
    calories: 340,
  },
  {
    id: 2,
    date: new Date(2023, 9, 15),
    meal: "Lunch",
    content: "Chicken",
    calories: 600,
  },
  {
    id: 3,
    date: new Date(2023, 9, 16),
    meal: "Dinner",
    content: "Cheese",
    calories: 200,
  },
];

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    padding: "0px",
    borderRadius: "var(--theme-border-radius-smooth)",
  },
};
function App() {
  const [records, setRecords] = useState(INITIAL_RECORDS);
  const [nextid, setnextid] = useState(5);
  const [isModalOpen, setisModalOpen] = useState(false);

  const handleOpenModal = () => {
    setisModalOpen(true);
  };

  const handleCloseModal = () => {
    setisModalOpen(false);
  };

  const formSubmitHandler = (record) => {
    const formattedRecord = {
      ...record,
      date: new Date(record.date),
      id: nextid,
    };
    setnextid((lastval) => lastval + 1);
    setRecords((prevrcords) => [formattedRecord, ...prevrcords]);

    handleCloseModal();
  };

  return (
    <div className='App'>
      <h1 className={styles.title}>Calorie Tracker</h1>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel='Modal'
        style={modalStyles}
      >
        <CaloriesRecordEdit
          onFormSubmit={formSubmitHandler}
          onCanccel={handleCloseModal}
        />
      </Modal>
      <ListingSection allRecords={records} />
      <button className={styles["open-modal-btn"]} onClick={handleOpenModal}>
        Track Food
      </button>
    </div>
  );
}

export default App;
