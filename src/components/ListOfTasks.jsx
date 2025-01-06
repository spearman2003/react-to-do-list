import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ListOfTasks = ({ taskList, setTaskList }) => {
  const handleXClick = (taskId) => {
    setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <div className="p-1 w-full max-w-41 bg-slate-500 rounded-lg space-y-1">
        <h2 className="font-bold text-2xl bg-slate-100 rounded-md text-left pl-1">
          Things To Do:
        </h2>
        <div className="bg-slate-100 rounded-md">
          {taskList.map((task) => (
            <div
              key={task.id}
              className="font-semibold text-xl text-left pl-1 pr-1 h-7 flex border-b-2 border-dotted border-gray-500 box-border last:border-b-0"
            >
              <p className="text-base">{task.text}</p>
              <FontAwesomeIcon
                className="ml-auto mt-auto mb-auto hover:text-red-700 hover:cursor-pointer"
                icon={faXmark}
                onClick={() => handleXClick(task.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListOfTasks;
