import React from "react";

const AddTask = ({ inputText, setInputText, handleAddTask, handleKeyDown }) => {
  return (
    <>
      <div className="bg-blue-400 p-2 rounded-md space-x-2 w-75">
        <input
          className="border-black outline-none rounded-md p-1"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Walk the dog..."
        />
        <button
          className="text-sm border border-black rounded-md p-1 bg-slate-400"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default AddTask;
