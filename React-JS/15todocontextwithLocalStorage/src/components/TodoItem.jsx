import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoItem({ todo }) {
  // ⭐ Step # 1⭐

  // 1st of all we make our states
  // we have require 2 states
  // 1st one is that our [todo] is editedable or not ? and bydefault its value is [false]

  const [isTodoEditable, setIsTodoEditable] = useState(false);

  // 2nd one is what is [message] in our [todo] bcz when we click on [edited] btn then state should be change of our todo but we also want prev value thats why we use this state and bydeafult its value is [jo b hmara to do h us ky ander dot [.] todo] and [destructerd todo] comes from [context todos => todo] at Line#23 like 🔻

  const [todoMsg, setTodoMsg] = useState(todo.todo);

  // ⭐ Step # 2⭐

  //Now we see functionality

  // so to get functionality we 1st of all get our context by [useTodo] bcz by this we get our functionalityies

  const { toggleComplete, deleteTodo, updatedTodo } = useTodo();

  // now we made a funcationality [edite Todo]

  const editTodo = () => {
    // in this we call 1st of all updatedTodo and in update we want [id and todo] so we get [id] first and then 2nd we give our new [todo] to our [updatetodo method] so we study we didnot pass directly [todo] bcz it is [object] so we pass [object] into our [updateTodo method] and in this object we [spread] our old [todo] first and then pass that value which we want to change/update and that is [todo] and in this todo we pass our [todoMsg] from our [state]

    updatedTodo(todo.id, { ...todo, todo: todoMsg });

    // now after updation I want to tell him that [isTodoEditeable]? so now it is not editeable so we make him false like 🔻

    setIsTodoEditable(false);
  };

  // now we call our [toggle] funcationality for this we make a fn() with name of [checkComplete] and when I click on btn then our [toggleComplete method] should run like 🔻

  const checkComplete = () => {
    // now we run our [toggleComplete] method  which comes from our [context] and in this method we give only [todo id]
    toggleComplete(todo.id);
  };
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={checkComplete}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
