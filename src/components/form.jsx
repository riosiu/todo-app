import React from "react";

export default function Form({ inputText, setInputText, todos, setTodos }) {
  const inputHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 10000 },
    ]);
    setInputText("");
  };
  return (
    <>
      <p className="text-2xl font-bold justify-center flex">Form Todo!</p>
      <div className="flex justify-center">
        <form action="" className="flex-row">
          <div className="flex-row flex py-6 gap-4 border-y-black">
            <input
              onChange={inputHandler}
              value={inputText}
              className="appearance-none border-teal py-3 px-2 text-black bg-white rounded-md leading-tight focus:outline-none"
              type="text"
              size={50}
              placeholder="Input Todo!"
              aria-label="Full name"
            />
            <button
              onClick={submitHandler}
              className=" flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Submit
            </button>

            <div className="bg-teal">
              <select
                name="todos"
                id=""
                className="p-3 rounded-md bg-teal-500 text-white hover:font-bold"
              >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
