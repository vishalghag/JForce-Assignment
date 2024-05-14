import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import CommonButton from "../common/CommonButton";
import CommponInput from "../common/CommponInput";
import TodoList from "./TodoList";
import { mockData } from "../utils/constant";

const Todo = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const addTaskText = useRef(null);
  const [todoData, setTodoData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Filter data based on selected date
  useEffect(() => {
    if (selectedDate) {
      const combinedData = [
        ...mockData.filter((todo) => todo.date === selectedDate),
        ...todoData.filter((todo) => todo.date === selectedDate),
      ];
      setFilteredData(combinedData);
    } else {
      setFilteredData([]);
    }
  }, [selectedDate, todoData]);

  const showDatePickerFn = () => {
    setShowPicker(!showPicker);
  };

  const addTodoBtn = () => {
    setShowPicker(false);
    const data = {
      date: selectedDate,
      text: addTaskText.current.value,
      finish: false,
    };
    const allTodoData = [data, ...todoData];
    setTodoData(allTodoData);
  };

  const showDate = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div>
      <Header />
      <div className="mt-10">
        <div className="flex flex-row justify-center items-center">
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
          </>
        )}
      </div>
      {filteredData.length > 0 && (
        <div className="flex flex-row justify-center items-center">
          <TodoList todoData={filteredData} />
        </div>
      )}
    </div>
  );
};

export default Todo;
