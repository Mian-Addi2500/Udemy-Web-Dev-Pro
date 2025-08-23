import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import "./App.css";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  // ⭐ Step # 2⭐

  // now we can do some work for our componenets [btn and card] for using our variables and fn() which comes from our [context] file

  // 1st of all we made [theme Mode]

  const [themeMode, setThemeMode] = useState("light");

  // 🔺This show bydefult our theme is [light] mode

  // now we have an acess of 2 methods [darkmode and lightmode] which we define in our [theme.js] file and we simply define only but they donot do any work right now mean we do not define any funcationality in [theme.js] file , I know these are 2 method but what they do I donot know and when this situation comes and this sitution most of the time comes so what we do now we simply take the name of these methods and exesilty define the methods with the [same name]  and that funcationality [apny ap] by self go to that methods [hn g ya bra hi intresting concept h] let see how we do 🔻

  // for light theme
  const lightMode = () => {
    setThemeMode("light");
  };

  // for dark theme
  const darkMode = () => {
    setThemeMode("dark");
  };

  //🔺 we can simply do this by if and else condition but we do this in this way its ok nno issue

  // now how we do actual change in theme we do this in classic [js] like 🔻

  // we use [useeffect] hook bcz when it run it will comes directly like 🔻

  useEffect(() => {
    // bcz this all code run in [client] side we didnot talk about [server] side right now that why we get our [document with qurey selecotr] and by this we get [html] access and in this we get access of [classlist] and from there we [remove] all thing which written like [dark or light or both] in classes

    document.querySelector("html").classList.remove("light", "dark");

    // now why we remove bcz I want to [add] bcz I didnot have an idea that what value it already taken that's I didnot get any load of change

    // now add [ThemeMode] I can also [dark or light]  but bcz we have state that's why we know jo mere [themeMode] ki value ho gi wohi hmean chyea

    document.querySelector("html").classList.add(themeMode);
    // now we a depence that if any change in [thememode] then useEffect run again that's why we add this dependence in our dependency array
  }, [themeMode]);
  // now to the above code 🔺 ka abhi tk  hmary context koi wasta ni h ya hmean agy chl ky pta chly ga ky kesy working ho gi so move on other files
  // ⭐Step # 3⭐
  // now go to our step by step project detail file
  return (
    // ⭐Step # 1⭐

    // rap our whole [jsx] with [themeProvider] and we know only [themeProvider] can not do any magic we should also give the [values] too bcz [jb tk hm values ni dean gy to ni pta chly ga ky kis chz ka access h or kis chz ka ni h ] so to access them all thing [un ko lana b to pry ga to lane gy kesy wo deakhty hn ] for this we simple write [value ] and pass all values in [object] and all values comes directly bcz we use [themeProvider] and this will give us direct access all values which are used in [createContext] in our [Theme.js] file which are [themeMode, darkMode, lightMode] now when we want to access in any componenet

    // now this our direct access of our these [themeMode, darkMode, lightMode] value and now we can use theme
    <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* them btn */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* card */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
