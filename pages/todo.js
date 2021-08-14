import React, { useState, useCallback } from "react"
import { TrashIcon } from "@heroicons/react/solid"

const Page = () => {
    const [todo, setTodo] = useState([{}]);
    const [value, setValue] = useState("");

    const newArray = todo.filter(value => Object.keys(value).length !== 0);

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: Date.now(),
            value,
            isCompleted: false
        }

        setTodo([...newArray, data]);
        setValue("");
    };

    const completed = (id) => {
        const findIndex = newArray.findIndex(item => item.id === id);
        const targetTodo = newArray[findIndex];
        const nextTodo = {
            ...targetTodo,
            isCompleted: !targetTodo.isCompleted
        }
        const nextTodos = newArray.slice();
        nextTodos[findIndex] = nextTodo;
        setTodo(nextTodos);
    }

    const deleteTodo = (id) => {
        const deleted = newArray.filter(item => item.id !== id);
        setTodo(deleted);
    }

    const notCompleted = newArray.filter(item => !item.isCompleted).length;
    const numberOfTodos = newArray.length

    return (
        <div className="bg-gradient-to-r from-indigo-600 to-blue-400 min-h-screen">
            <div className="flex flex-col max-w-2xl mx-auto space-y-6">
                <form onSubmit={handleSubmit}>
                    <div className="flex space-x-2 max-w-2xl mx-auto pt-20">
                        <div className="w-3/4 pt-0">
                            <input
                                className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                type="text"
                                placeholder="What do you have in mind?"
                                onChange={handleChange}
                                value={value}
                            />
                        </div>
                        <button
                            disabled={!value}
                            onClick={handleSubmit}
                            type="submit"
                            className="w-1/4 bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                        >
                            {"Add"}
                        </button>
                    </div>
                </form>
                <div>
                    <p className="text-white text-3xl font-bold text-center tracking-wide">{`${notCompleted} remaining out of ${numberOfTodos} tasks`}</p>
                </div>
                <div className="px-20">
                    <ul>
                        {newArray?.map((item, idx) => {
                            return (
                                <li key={idx}>
                                    <div className="flex justify-between py-6 text-white border-b border-gray-400 border-opacity-30">
                                        <div
                                            onClick={() => completed(item.id)}
                                            className="capitalize font-extrabold cursor-pointer"
                                        >
                                            {item.value}
                                            <span
                                                className={`text-xs ml-4 font-normal px-2 py-1 rounded-full ${item.isCompleted ? "bg-green-500" : "bg-red-500"}`}>{item.isCompleted ? "DONE" : "NOT DONE"}</span>
                                        </div>
                                        <div
                                            onClick={() => deleteTodo(item.id)}
                                        >
                                            <TrashIcon className="h-6 w-6 cursor-pointer text-red-500" aria-hidden="true" />
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Page;
