import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import ListOfTasks from "./components/ListOfTasks";

function App() {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState(() => {
    const savedTasksString = localStorage.getItem("myTasks");
    return savedTasksString ? JSON.parse(savedTasksString) : [];
  });

  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(taskList));
  }, [taskList]);

  const handleAddTask = () => {
    if (!inputText.trim()) {
      setInputText("");
      return;
    }
    const currentTask = { id: Date.now(), text: inputText, completed: false };
    setTaskList((prevTasks) => [...prevTasks, currentTask]);
    setInputText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <>
      <div className="App max-w-6xl h-screen overflow-hidden flex flex-col items-center space-y-5 p-5 text-center">
        <h1 className="font-bold text-4xl w-full">Todo List</h1>

        <AddTask
          inputText={inputText}
          setInputText={setInputText}
          handleAddTask={handleAddTask}
          handleKeyDown={handleKeyDown}
        />
        <ListOfTasks taskList={taskList} setTaskList={setTaskList} />
      </div>
    </>
  );
}

export default App;
