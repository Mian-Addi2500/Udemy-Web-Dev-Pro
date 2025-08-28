import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  // ⭐ Step # 1⭐

  //   1st of all define state here for [indivaul todo] and its bydefault valude is an empty array

  const [todo, setTodo] = useState("");

  // now bcz it is [form] so in this we want functionality of [addTodo] bcz in our app we see in {form} we simply add todo only nothing can be do else so our [addTOdo] funcationality is in our [app.jsx] bcz in [addtodo] we inject functionality from [app.jsx] file but fn() define in context file  so functionality is avaliable but now we want that funcationality here so what I do for this ? bcz when we definae funcationality it now go to [context] file and now we use [useTodo] hook which we made in our [context] file bcz in this hook we use or [useContext] hook so by using [useTodo] we can use functionality of [useContext] hook

  // so now where we want values of context in any component we simply write 1 line of code and all values should be comes easily and we use them so which functionality you want you simply get this like we want [addTodo] we get it by our custom [hook] like 🔻

  const { addTodo } = useTodo();

  //   now we get values and pass them to [addtodo] so let see in [context] file what should [addtodo] can do ? we see [addTodo] want a [todo] you should pass but what it should work it didnot tell us so [kam khn btaya h ky ya kia kam krta h ] so work should be tell in [app.jsx] that it will take [todos] and extract all [previous] values and [spread] them and after that i will pass a object and take [data.now] in our [id] and baqi todo ko spread kr dia h [app.jsx] file mn [addTOdo method mn] now we made a method to [add our todo] like 🔻

  //   now we made a method to add our todo
  const add = (e) => {
    // 1st of all
    e.preventDefault();

    // now check condition that [todo] have someThing or not

    if (!todo) return;

    // if todo have some value then we simply call [addtodo] and pass an object to it bcz we have objects in an array according to our functionality so we pass object to it and now pass values to it by [  addTodo({ id: Date.now(), todo: todo, completed: false });  ] we can pass it no issue  but but we know we already pass value of [id] in our app.jsx file in [addtodo] functionality so now we didnot pass here if we want to pass here no issue [whn py id ki value gab ho jy gi or ya wali aa jy gi ] but now we didnot want this so remove id value from there now for [ todo: todo] we know in new syntax if our [field and value name] should be same so we simply write only [todo] and our [completed] is  [false]

    addTodo({ todo, completed: false });

    // now in our input filed which will carry  [todo] for us so when we addTodo then after add this filed also have [todo] so to empty this filed by 🔻

    setTodo("");
  };
  return (
    // ⭐ Step # 2⭐

    // bcz it is form so we add [onSubmit] into our form tag and add our method name which we made for our submit is [add] like 🔻
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        // ⭐ Step # 3⭐

        // now in input filed 1st of all we [wireUp] mean [is ko hm wiring bolty hn ky wireing ho jy [input] ki hmari [state] ky sath] for this we do 🔻

        value={todo}
        // so there should be a change in it to add it to our state for this we have [onchange] method like 🔻

        onChange={(e) => setTodo(e.target.value)}
      />
      {/* 
      
      // ⭐ Step # 3⭐
      // now we didnot want any method for addbtn bcz this for have type submite so it will auto submit
      
      
      */}

      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
