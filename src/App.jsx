import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
function App() {
  const [todo, setTodo] = useState([]);
  const [weeklyTodo, setWeeklyTodo] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [weeklyNewTask, setWeeklyNewTask] = useState("");
  // const task = [
  //   "Installing react",
  //   "understanding JSX",
  //   "Installing Tailwind",
  //   "Tailwing Css classes to style",
  //   "Dynamic to-do list",
  //   "Im learning map methods and rendering homie",
  // ];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTodo((todo) => [...todo, newTask]);
      setNewTask("");
    }
  };
  const handleWeeklySubmit = (e) => {
    e.preventDefault();
    if (weeklyNewTask.trim()) {
      setWeeklyTodo((weeklyTodo) => [...weeklyTodo, weeklyNewTask]);
      setWeeklyNewTask("");
    }
  };
  return (
    <>
      <h1 className="mb-5 mt-4 text-6xl h-auto text-center text-pretty font-sans">
        <h1>TODO LIST</h1>
      </h1>
      {/* parent */}
      <div className="flex justify-around space-x-8">

        {/*first div*/}
        <div className=" min-h-screen bg-cyan-900 p-5 rounded-lg">
          <div className="bg-white p-5 m-3 max-w-xl rounded-lg shadow-md shadow-cyan-900 ">
            <p className="text-3xl p-2">
              <b>My Tasks Today :</b>
            </p>
            <form className="m-2 flex gap-3" onSubmit={handleSubmit}>
              <input
                placeholder="Enter the task"
                type="text"
                value={newTask}
                className=" px-1 py-2 border-gray-700 border rounded-lg w-96"
                onChange={(e) => {
                  setNewTask(e.target.value);
                }}
              ></input>
              <button className="p-2 bg-cyan-800 text-white font-bold rounded-lg hover:bg-cyan-950 ">
                Add Task
              </button>
            </form>
            <ul>
              {todo.map((ele, index) => {
                return (
                  <li key={index} className=" text-2xl font-light">
                    {ele}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/*second div*/}
        <div className=" min-h-screen bg-cyan-900 p-5 rounded-lg ">
          <div className="bg-white p-5 m-3 max-w-xl rounded-lg shadow-md">
            <p className="text-3xl p-2">
              <b>Tasks Of The Week :</b>
            </p>
            <form className="m-2 flex gap-3" onSubmit={handleWeeklySubmit}>
              <input
                placeholder="Enter the task"
                type="text"
                value={weeklyNewTask}
                className=" px-1 py-2 border-gray-700 border rounded-lg w-96"
                onChange={(e) => {
                  setWeeklyNewTask(e.target.value);
                }}
              ></input>
              <button className="p-2 bg-cyan-800 text-white font-bold rounded-lg hover:bg-cyan-950">
                Add Task
              </button>
            </form>
            <ul>
              {weeklyTodo.map((elem, index) => {
                return (
                  <li key={index} className=" text-2xl font-light">
                    {elem}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
