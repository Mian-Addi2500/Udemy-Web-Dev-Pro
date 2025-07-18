// in this we take all components there and from there we export otherwise what happend everytime we import our file i.e [inputbox, seacrchbox etc] there there should be many things should be import in our file for this we tackel this issue or mess we directly only index file in component folder to import it and access every thing from this index file for this it is very easy to import every thing one by one here 🔻

import InputBox from "./InputBox";

// now export them onebyone

// if we have other components we use [,] after [inputbox] and write them one by one
export { InputBox };

// and by this I only import 1 file and I will take all components in our main file

// now we go back to [Inputbox] file again on Line#26
