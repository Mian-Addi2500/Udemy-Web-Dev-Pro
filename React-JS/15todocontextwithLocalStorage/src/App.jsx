import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";

import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  // ⭐ Step # 2 ⭐

  // now the [todos] that comes for us from [context] can be store and when we store them then [UI] can also be change . So, to get all our requirement according to our desire we have [hook] in [react] which is [useSate] so use it

  // now what is by default value ? so bydefault value should be an [empty Array] bcz when I take [null] that can take problem so I use [empty array] bcz [mujhy ya pta chl rha h  ky agr [loop] lgy gi to us mn aik b value ni h to mn whn py us hisab sy kam kr skta hn ]

  const [todos, setTodos] = useState([]);

  // ⭐ Step # 3 ⭐

  //  now one by one we make our functionality which we write functions in our [context]

  //  so main thing is how we define all functionality of [context] here ? for this we we get our [todoProvider] in our [return] fragment value now after this our work doesnot complete bcz only [provider] do not do some magic after that we see what things our [provider] can [provide] to us so provider can provide us all [values] for this we use [Values={{}}] in our [fragment] too. now why we use doubble {{}} in our [values] bcz we import them so we directly write these {{}} mean like I can [destructur] but it is not important you can directly get values by [value.] but we can also do this so we can do

  // now 1st one is [basic] functionality and in this we [add] value
  // main thing is [name] of the fn() in [context and here] should be same
  const addTodo = (todo) => {
    // now go to our [context] file and see how [addtodo] can do work for this we require [todo] according to our [todocontext] file so we can take [todo] as variable input to our fn() and this [todo] in [string] form and this didnot comes from our [state] bcz in [state] we have all [todos] which comes from [values] of [fragment] so indiviual [todo] is not prestent right now so this todo comes from the [form] which we made below now assume that [todo] comes
    // now our this [todo] should go to our [state] all [todos] in an empty array but there is not nesserary every time arry should be empty maybe possible some values are there in array and most of the time values are present so for this we 1st of call our [setTodos] method of our [state] like🔻

    /* but but when we write [todo] in our [setTodo] like 

    setTodos(todo)

    this will overright our all todo array so how to add our new todo without deleting our old one for this we study that our [setTodo ] have callback fn() in this fn() we write our [previous] values and [spred] them in our fn() and after that we can add our new [todo] by this our prev remian same and new can be added like 🔻 

    */
    //  now in this we made our [todo] bcz when we see in our [context] so we made our todo is an [object] [aesa ni h ky sirf aik string add kr di h agr ap ko string deani h but agr id ni ho gi to [keys] loop lagany mn problem aye gi so id to zarori h ] so now we have 3 values in our todo of [context] so I can not add direct [todo] for this I will give an [object] and in this object 1st of all I will give an [ID] now I didnot know what id I can pass so for Dynamic value i pass [Date.now() method] in our Id for rendom id and after [id] we [destructur/ spread] our todo to take all values as it is like [...id] bcz I know [todo] is an object [apny ap mn ] let see how write code 🔻
    setTodos((prevTodo) => [{ id: Date.now(), ...todo }, ...prevTodo]);
  };

  // now we write funcationilty of [updateTodo]
  // this fn() can want [id and todo] bcz we update our toDO

  const updatedTodo = (id, todo) => {
    // now on what [id] I can perform [updation] so this one thing you know that [todos] is our an array  so we can loop through this array and find that on which one id of array to perform [updation] and in this we add our new [todos]

    // now we call our [setTodo] and we know this have callback so we wtire and pass [prev] that take all previous [todos] of an array so on this [prev] we add loop we use [map] but you can use [forEach] it depends on you now in [map] we get all indivaual values one by one and we name them to [prevTodo] and we know every todo have an [id] so we add condtion on our [prevTodo] that if the [id] of [prevTodo] should match to our given [id] which we pass in our fn() then add our [new todo] other-wise add [prevTodo] same as it

    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  // now we write funcationilty of [deleteTodo]

  // delete should be same as [update]

  const deleteTodo = (id) => {
    // in [delet] we didnot use [map] we can use it but there should be an other intersting contecpt which is [filter] bcz in this we want that we have an orignal array but now we make a new array and in this new array all other values should be present but the [id] which we give sould not be present for this we add filter and in this we made condition that all other todos should be add which id didnot eqaual to our given [id] bcz [filter] can work only on [true] statements
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // now we write funcationilty of [toggleComplete]

  // now we see an intresting and business logic concept in this functaionality bcz the main intresting thing in this is [check mark] that show [todo] complete or not and let see what we do for this [checkmark] for this we will go  inside to our [context todos] object and we toggle or [completed] value into this [object] mean if [completed] is [true] the turn it to [false] and vise versa

  // we have seen into [update] we use [map] and there should be almost same work as it let see how we write code for this 🔻

  const toggleComplete = (id) => {
    // now we know we have [setTodos] method in this we also know we have an [array] of our [todos] so by using callback in our [setTodos] we access our all [previous] values of our [array] now when we get access our complete array now we use [map] for looping this array so when we use [map] we get each [todo] 1by1 now we add [condition] in our loop that [jo jo todos aa rhy hn un ko 1by1 chck kro ky knsa todo hmri [id] sy match kr rha h ] and when [todo] match to our [id]  then we use [ternery operator] to add conditions that if [todo] should matched then use {} for object bcz our todo is an object in [context] file then take complete [todo] and [spred it ] by [spread operator] like [...prevtodo] bcz we want all value same as it but one value should be changed for this we use this operator so when we use [spred operator] we get all value now we want to change [completed] we use [,] and use [completed ] and overwrite is by using [!] to our [prevTodo.completed] by this [true] should be [false] and [false] should be [true] and if [id] didnot matched then [prevTodo] remains same as it in [else] condition like 🔻🔻
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };
  //🪐🪐  now our basic context functionality should be ended 🪐🪐

  // ⭐ Step # 4 ⭐

  // 🌞🌞now we start our [local storage] functionality 🌞🌞

  //  now main important thing is when our [react App] load then there should be a posibality we have add [todos] already so that [todos] should be [load] fist of all so we have a hook in react which we already study that insure that it will go to loacal storage and get all [todos] and store them to our [todos array] which we use in our state above of this file to our [app] and that hook is [useEffect] hook now see how we write code

  useEffect(() => {
    // now we 1st of all get all values and see how we get them ? see when we are in [React] and we didnot talk about [server side randering] [q ky sara kam agr server py ho ggya to browser py kbhi aye ni ] so how [loacl storage] can work?

    // in [loacl storage] we [get and set] values when we [set] values in [LS] we give [key] and [value] but when we [get] values in [ls] we give only [key]

    // now we get value here bcz it is our requirement and now we pass [key] bcz i didnot [set] value and we [set] value in next few miniuts so let see how we [get] value from [ls] 🔻

    // now 1 more thing when we get item from [ls] then it will give us values in [string] formate but we want it to [JSON] formate bcz [JSON] hi to h jo pury ka pura structure actually mn preserve rakhy ga so for this we use [json.parse] which directly comes from [JS] now let see how we write code 🔻

    const todos = JSON.parse(localStorage.getItem("todos"));

    // now we set the values if there something then ! for this we take a conditional check that is there [todos] are available or not if not then we set value the app should be crashed and we also ask an other querry to our [if] statement that the [todo] which comes is have any [length] is greater then [0] or not ? bcz I know [todo] is an array yes we say this is a [json] but endof the day [todos] are array and object inside an array so to preserve this structure to then it should be preserv through [json] and in [string] this structur is n avalible so you take array it is not nessary [jason] means [currely brases] json mean should be [array] it is posible like 🔻

    if (todos && todos.length > 0) {
      // now we set our [todos]
      setTodos(todos);
    }
  }, []);

  // now the question is can we use multiple [useeffects] ? the answer is [yes] so now we have work in an other [ls] bcz above [ls] work is when we load our [app] then our all [todos] comes but now we have an [other work] is that when we add [todo] then I want to [store] this [todo] to [ls] now when add to [ls] so when it go to above [state todos] [halan ky ja constext Api ky throght rhi h but end of the day [context api] also avaliabe here in this file in form of [todoProvide] ] so this provider give to me the [todos] so when values go to that form there we get value to our [state todos] and when something change in [useSTate todos] so I will add all that value to [ls] now we think that when we use above [useEffect] we use [todos] in [dependency Array] and write an other method on above yes we can do but problem should be come that when some change should be come into the [todos] of [d-array] then it will also [get] again by [get] method which we write above so I didnot want that it should be run

  // so to over this problem we have many options but we have one of them is to use another [useEffect] and mostly app use more then one [useEffect] so now we write code in it

  useEffect(() => {
    // now we set item here and in [setItem] we will pass [key and value] and these should be pass in [string] formate so our [key] should be [string] but our [value] is in [array] formate  so our [ls] should not get value so what can I do ? so for this now our [JSON] give us an other method which is [jason.stringify] and that should be convert all tinghs in to string
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updatedTodo, deleteTodo, toggleComplete }}
    >
      {/* ⭐ Step # 1 ⭐ */}

      {/* Go to ' https://github.com/hiteshchoudhary/chai-aur-react/blob/main/todoContextapiNotes.md ' link and copy [app js UI]  and paste here*/}

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* 
            // ⭐ Step # Last ⭐
            Todo form goes here 
            */}

            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {/* 
            In this we add loop on todos which  comes from context and in this loop we pass a prop into a [todoItem] and call it let see how🔻

            for this we satrt our [js] by {}
            */}

            {
              // now on todos we add loop and in map it will go to every todo and then make sure about {} if you use {} then [return] keyword should be used and if you use () then it means is auto return
              todos.map((todo) => (
                // now we call a [div] here now I know in Loop this div 🔻 should be repite and every one div is unique or not how to understand it so for this we will get a thing which is [keys] and if you didnot use keys there should be no any issue it will give you waring but agy jy ky proformance itni ziada degrade ho jati h jis ki koi had ni bcz react didnot know how to make changes in DOM it maybe possible 3 todos look like same but what is garanty that these are seprate so to get this garunty we use [key] and in key we pass our [todo id]
                <div key={todo.id} className="w-full">
                  {/* now we also pass prop to this component bcz we use it in this component */}
                  <TodoItem todo={todo} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
