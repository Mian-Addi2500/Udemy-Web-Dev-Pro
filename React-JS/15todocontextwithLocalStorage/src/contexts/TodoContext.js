// ⭐ step # 1 ⭐

// as we know we need 2 things in our [context] so take them

import { useContext, createContext } from "react";

// ⭐ step # 2 ⭐

// now we export a context and made context with [createContext] method which take a object

export const TodoContext = createContext({
  //   now we add values in our context which we use in any componenet

  // 1st of all we make an array with name of [todos] and in this array every filed add like [{},{},{}] mean [har aik jo todo ho ga wo [object] ho ga ] and now we see how every [todo] should be made in our array 🔻
  todos: [
    {
      // every todo has a [id]

      id: 1,

      // and a [todo] or we name it [todo tilte / todoName / todoMsg] which name you should like you can use 🔻

      todo: "Todo msg",

      // now we see bydefault [kia h] [complete or not] and we name it [completed , checked etc] its depends on you but i use [completed] which is bydefault [false]

      completed: false,
    },

    // 🔺now we only add single todo right now bcz I rembeber its model and later on I will come there and delet it bcz bydefault I need empty array []
  ],
  //   now see this 🔺 is  simple a peoperty which we use in prev project like we have  [themeMode] variable which was [string] and in this we have same [variable] but this variable is an [array] and in this array we have [object] and on this array we should [loop] through simply to get its values simply

  //   so the above 🔺 we write [properties] now we write [functionalities] same as prev project we write [functionalities] 🔻

  // 1st functionality we have [addTodo] and in this functionality we pass [todo] which we use in [todos] property at Line#23 which is [todo] mean [todo msg] and simple make function what this fn() can do ? we donot know . what it can do we descide in [app.jsx] , if you want to descide its functionality in any file and import that file in [app.jsx] but usually [context api] is not made for very big projects so for these big projects we use [redux, reduxtoolkit or zustan ] like state managment library so thats why now core funcationality define same like this most of the [context api] now most of the time mean it is not nessesry every time we do this but some people use deff aproch to but [har kisi ky apny apny methods hn] so now we use this aproch simply🔻

  addTodo: (todo) => {},

  //   now after addTodo we can also [update] or todo too so for this we also write functionality like 🔻

  // now [Update] is not a [toggle] in update [pora ka pora ] complete toDo can update and in this fn() we want 2 things [one] is [id] that is for which todo you can want toupdate and [2nd] thing is [todo] which show todo msg of todo when we click on [update] so now se how we write functionality 🔻

  updatedTodo: (id, todo) => {},

  // now in [Delete] fn() we can take only [id] bcz by this [id] we can go and [delete] that [todo]

  deleteTodo: (id) => {},

  // now our last one is [toggleComplete] and in this which filed we have in our todo list can be [update] and other all work can do by [CSS] which we see in the functionality of our this fn() in after few time . So, for this fn() we only require [id]

  toggleComplete: (id) => {},

  // So our work complete in our [context] in this we didnot declear any functionality we simple say in our [context] that what are [methods and values] in our [context]

  // so intersting thing is bcz [todos] is avalible in our [Context] here so when I get access of [context] then I know that [jo jo values mujhy chyean ] I know I will get them from [todos] which I declear in context above .SO it doesnot matter what is my [component] but I can get all [values] from there mean our [context] but methods functionality can be written in [app.jsx]
});

// ⭐ step # 3 ⭐

// now we export a [Hook] directly bcz we didnot want again again import [context] in useContext that why we export directly Hook like 🔻

export const useTodo = () => {
  // in this we return [useContext] which want [context] and we didnot do this in main file we do here and directly export here

  return useContext(TodoContext);
};

// ⭐ step # 4 ⭐

// now we export [provider]

export const TodoProvider = TodoContext.Provider;

