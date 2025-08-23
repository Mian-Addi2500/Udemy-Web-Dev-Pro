// 1st of all we import [createContext and useContext] from react

import { createContext, useContext } from "react";

// now we export [themeContext] same as we study  before

// but in this file we use diff aproch bcz in last project we did't give any value into [createContext()] but actually we add default value in our [createContext] method mean when our [context] should made and we are in our [initial  state] then there we should also pass some values [mtlb ky context jb phli bar bny to us mn kia kia values already feed hn ] but [jo pechlea wala project hm ny bnaya tha us mn koi value ni di thi] but now there I want that in our [createContext()] a default [object] present and in this [object] we have some values like 🔻
export const ThemeContext = createContext({
  // one thing in it should be [themeMode] and its value should be [light] bcz I want when someOne contact with [themeMode] and if it directly call and I didnot give any value then the project should be charsh or value come to [null] so for this I want when user want to set [theme] then atleast one value should be there like 🔻

  themeMode: "light",

  //   now another thing I want is the 2 methods with name of [darkTheme and lightTheme] should be avalible and what these fn() can do nothing right now but we explore it after some little bit time

  darkMode: () => {},
  lightMode: () => {},

  //   now when anyOne call the Context he will get [themeMode ] varaible and [darkMode , lighMode] fn() 2 methods now this concept explane that you can pass [variable and method] to our [createCOntext] method no issue and if you remember that we pass [state] in our [provider] in prev project that was also same we pass [variable {user} and method {setUser}] in our [useState].
});

// now we see that we also [export] our [themeProvider] directly from this file but in prev project we create another [provider] file but in this we directly export our simple one thing which is to export directly [themeContext.provider] there, which we use in prev project to rap our [children] if you rembebar now there we simply export a variable like 🔻

export const ThemeProvider = ThemeContext.Provider;

// now what is the benifit to export directly there🔺 ? there is no any benifit but [har aik ky alg alg tareqy ky stly hn ]

// now if we want to make our [custom Hooks] there then we also do this and mostly people made there custum hooks there . now we made our custom hook and export theme like🔻

// now what is our Hook name ? our hook name is [useTheme] we write [use] word bcz it give us aknowledgment that this is [hook] otherwise if we not use this word no isue
export default function useTheme() {
  // now what our hook can do ? it didn't do anything it just simply return our [useContext] and in this context we also give our [context] too which we made at line#8 [themContext] like 🔻

  return useContext(ThemeContext);

  //   now by this we now did't give/import 2 2 files in every component like in prev project we import [useContext and UserContext] both in our [profile and even in our logIn ] componenet too in prev project. butin this  [context] directly set here now what we do now we simply [import] our [useTheme] and [useTheme] by self take [useContext] and it will give us directly access all values which are in our COntext like  [variable and method] which are in our COntext
}

// and this is also a coding strutcher that is mostly people use SO what can I do by this let see I will take [ThemeProvider] and [rap] our [Componenets] and after that if any time I want to access the above [themeMode variable] and [dark and light methods] then I will use [useTheme] and [in mn sy jo chyea wo extract kr ln ga ] , see work should be same like prev project but this is little bit complex strutcher which should be use in complex projects but no one can study you .

// now see we do our complete context work in one file and also mostly production code write this in 1 file bcz it is better aproch bcz we do our work in 2 files and now we do same work in 1 file that's why mostly people like this aproch

// now what can we do we simply go to our [app.jsx] file and do [raping] in that file ] so go to [app.jsx]
