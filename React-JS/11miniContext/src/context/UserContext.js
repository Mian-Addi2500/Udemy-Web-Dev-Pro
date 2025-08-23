// now import react here 🔻

import React from "react";

// now we made a Context and COntext comes from react like 🔻

const UserContext = React.createContext();

// 🔺this is method like [useState] etc and we store it in to variable

// now we through our vaiable into [output]

export default UserContext;

// now see in this file what we do we can simple made a variable and through it to [output] and our context we get

// this is our part 1

// now important note 🔻

// now when we made context then [context] give us major thing which is [provider] Q ky [context] h kia hmean [variable] provide hi to kr rha h . so every [context] is a [provider] to [userContext] b apny ap mn aik [provider] hi to h jo sary hm kia kren gy end of the day is ko aik [raper] lagen gy like we see at many places we use [<div></div>] as a raper or fragment [<></>] as a raper like this what we can do evently ? let see

/*
let suppose we made diff components like suppose login, card, etc or we have component inside another component like [<card><dashBord/></card>] we can rapp all theses components with our context and when we rap them by our [context ] then what will happen ? then our [context] become a [provider] now [provider] mean inside the rapp all component have access of that [userContext] so we can suppose our [context] is simply like a [globle variable] is sy ziada or kuch ni now see how we rap ? 🔻

<UserContext>
<logIn/>
<card>
  <dashboard/>
</card>


<UserContext/>

now every component can access our context direclty
*/


// now go to step by step guid file at line 13



