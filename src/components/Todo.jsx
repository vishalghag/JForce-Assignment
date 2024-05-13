import React, { useRef, useState } from "react";
import Header from "./Header";
import CommonButton from "../common/CommonButton";
import CommponInput from "../common/CommponInput";

const Todo = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const addTaskText = useRef(null);

  const showDatePickerFn = () => {
    console.log("clicked");
    setShowPicker(!showPicker);
  };

  const addTodoBtn = () => {
    setShowPicker(!showPicker);
    let data = {
      date: selectedDate,
      text: addTaskText.current.value,
    };
    console.log(data);
  };

  const showDate = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div>
      <Header />
      <div className=" mt-10">
        <div className=" flex flex-row justify-center items-center">
          {!showPicker && (
            <CommonButton
              buttonName={"Add Todo"}
              buttonOnClick={showDatePickerFn}
            />
          )}
        </div>
        {showPicker && (
          <>
            <CommponInput
              inputType={"date"}
              monitorState={showDate}
              inputValue={selectedDate}
            />
            <CommponInput
              inputType={"text"}
              inputPlaceholder={"Add todo text"}
              inputRef={addTaskText}
            />
            <CommonButton buttonName={"Add todo"} buttonOnClick={addTodoBtn} />
            {selectedDate && <p>Selected Date: {selectedDate}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default Todo;
