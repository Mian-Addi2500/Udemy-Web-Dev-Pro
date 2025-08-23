// now in this file we can directly [export] all things from [./TodoContext] file like 🔻

export { TodoContext, TodoProvider, useTodo } from "./TodoContext";

// now what is the importance of [useTodo] ? the answer is => when we have [useTodo] method and in this methode we take [useContext] and that context get out [todoContext] and when we have our complete [context] then from this [context] we completly filter our all [values and methods] eailsy other wise we can export all methods one by one so to our come this problem we can simpley export one thing which is [useTodo]

// in this file we have only one line of code to export all things only

