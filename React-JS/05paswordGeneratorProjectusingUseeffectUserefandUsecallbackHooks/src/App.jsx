import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  // ⭐Step # 1⭐

  // 1st of all get all variables which are used in this project

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  // for showing password in input filed we also use [useState] and bydefault its value shuld be change on reload but now we give him [empty string] like 🔻

  const [password, setPassword] = useState("");
  // ⭐step #5⭐

  // useRef Hook

  // we use this hook to refrence the value for example in our case we have copy btn and password input filed and we want when we press on copy btn the password should be copied for this now we donot have any link b/w btn and input filed . So for this linking we use this hook

  // let see how

  const passwordRef = useRef(null);

  // now we have not any referance that why we give [null] to it 🔺

  // now how referance comes ? refrence should comes from our password input filed and we go to that input tag and pass [ref] to it and give it value that is inour case is [passwordRef] now go to input filed and add property to input filed

  // after add property to ref in input now 🔻

  // now when we add refrence but only ref not work when we click on btn then do some thing for this we add [onclick] on that btn and made a method which is [copyPasswordToClipboard]

  // now create method 🔻

  // we aslo want optimisitaion so for this we also use [useCallback] hook

  const copyPasswordToClipboard = useCallback(() => {
    // now how copy to clipboard work in js for this what we keyword use? let see 🔻

    window.navigator.clipboard.writeText(password);
    // bcz we directly work in [react] that why we directly write [window] bcz ulimatily our complet react compile in [js] and where it run then there should be this [window] object but if we create this same thing in [nextJS] then there should be server side rendering that why there we do not have any access to [window] bcz in server side rendring [window] object should not be present there

    // now when we onclick copybtn then pasword should be copied but pasword should not be selected mean users didnot show that pasword copied or not for this e=we use [paswordRef]

    // now see how to use this 🔻

    passwordRef.current?.select();

    // we see we able to select password

    // now we also give optimisation like we give rang to password that at that range password copied mean copy only 6 litter etc

    // now see how ? 🔻

    // passwordRef.current?.setSelectionRange(0, 3);

    // this will select value only three 🔺
  }, [password]);

  // ⭐Step # 2⭐

  // now we made a password generator

  // for this we use a Hook which is [useCallback] bcz we know we generate pasword again and again for this we run our [passwordGenerator] fn() this will effect on performance to tackel this problem we use [useCallback] hook for best optimisition

  // syntaxt

  // useCallback(fn, dependencies)

  // in our case the [fn() ] is [passwordgenerator] and [dependencies] are [number , length , charactor] bcz when these value changes the fn() should [memoise] the change and put things in [chases]   and we give these [dependencies] in [array] and this is optimization of code

  // let see how to use this hook 🔻

  const passwordGenerator = useCallback(() => {
    // now in this fn we generate our password
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // when number allowed then add this in to above string too
    if (numberAllowed) str += "0123456789";
    // when char allowed then add this in to above string too
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    // now we loop through for our password and our length governen that how much time loop should be run and by this we get the position of char in [str] and we go to that position on str and get value from there

    // we use our classic for loop

    for (let i = 1; i <= length; i++) {
      // now we get array index value by this 🔻
      let char = Math.floor(Math.random() * str.length + 1);

      // now we pik charactor from string 🔻

      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // ⭐ Step # 4⭐

  // in this we study how to show our password in pasword input field ? for this we can use [button] to click on this btn the pasword should be shown in the input filed but we want when we reload the page the password should be shown in input filed for this we read an other [hook]

  // this hook is used when any thing little bit change in dependency array the useEffect should responcible to run the fn() instantainly

  // that is useEffect hook and this is intesting and mostly used

  // 🪐 let see how to use this 🔻

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  //
  return (
    <>
      {/* ⭐ step # 3⭐ 
    
    🪐 setting Ui  with tailwind CSS
    
    */}
      <div className="w-full max-w-md mx-auto rounded-lg px-4 my-8 text-orange-500  bg-gray-800 shadow-md">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4  ">
          <input
            type="text"
            name=""
            id=""
            value={password}
            className="outline-none w-full py-1 px-3 "
            placeholder="password"
            readOnly
            ref={passwordRef}
            // now we have referance 🔺
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-700 text-white px-3 py-0.5  hover:bg-blue-600 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-700 "
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              name=""
              id=""
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id="numberInput"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id="charInput"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
