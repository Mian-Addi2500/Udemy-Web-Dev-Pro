// 1st of all import [react]

import React from "react";

// now import userContext

import UserContext from "./UserContext";

// now we made a method with name [UserContextProvider]

// now we already study the concept of [outlet] in [rr-dom] in that we want [header and footer etc] as it is and in b/w display [outlet] components  like [home,contact etc]

// same as [outlet] concept we have an other concept in which we have that ky ap ky pass jo b [props] aa rhy hn [childern] , us ko as it is ap yhn py use kr lo kesy use krty hn wo b deakhty hn , axha ya [childern] jo h na koi magical ni hota h jesy hm apna [div] wagera deaty hn wohi hmra [childern] h aik thra sy kuch, [childern] aik geniric name h  jo b ap ky pass aa rha h us ko as it agy pass kr do bs, is leye aik geniric name use krty hn ass such ya zorire ni ky us ko name [childern] hi dean but ya already [states] wagera mn  use hota tha to hm ny b socha ky yhi use kr leaty hn like 🔻
const UserContextProvider = ({ children }) => {
  // now what can we do ?

  // we make a state for [data] to pass it to [provider] and we use [React.useState] by this it is not nessesery to import [useState] we access it directly by [React.useState] like 🔻

  const [user, setUser] = React.useState(null);
  // we simply use [return] and see what we do in [return]

  return (
    // now we use concept of [rap] which we discuss in [UserContext.js] file and we [rap] with our [UserContext] but akela [userContext] likhny sy kam ni ho ga is ky sath hmen [.provder] b likhna pry ga Q ky is ki hm ko aik [value] access krni prti h [property], to wo property hmry pass h [provder] but but is thra sy b abhi kam ni ho py ga Q ky thk h [provide] to kr dia liken kia chez [access] kry ga ya ? to [data] b to dena pry ga na sath mn hn g isi leye hm ny [state] mn [data] ko lia h as a [user] and now without [value] it is satisfied  but problem to wohi h na ky hm ny [provider ] sy [rap] to kr dia  but acctually mn kn c value ka access dy rhy hn to wo b to hm ko btana pry ga to us ky leye hmen [provider] ky ander aik [property] milti h [prop], hn g yhn py b ap [prop] hi pass kr rhy hn aik thra sy wo h [value]

    // to is value mn ap ko jo b data pass krna ho hm is mn kr skty hn to hm [value] mn aik [obj] pass kren gy jis ky ander mera jo man chy mn data dy skta hn jesy mn [user ] ka b access dy rha hn or[setUser] ka b access dy rha hn or b hmry pass 5 chezen hn to un sub ka access b dy do like 🔻

    <UserContext.Provider value={{ user, setUser }}>
      {/* in this what we do ? in this jo b hmry pass [childern] aa rha h us ko hm as it is render krwa dean gy like 🔻  */}

      {children}
    </UserContext.Provider>

    // now our almost half work is done and this is our [setup] is mn ziada kuch tha ni smhjny like chezen then but our [UserContext.js] was very basic in this we use [createContext] hook and stor it to variable simple and now when we made next time we easily do it speedy

    // same as [userContext.js] when we made [provider] we also make it speedly and if we call the [api's] we can call them in place of our [state] at line # 19 and after that jo jo access mil gia h us ko sedha [value] mn through in kr do 
    


  );
};

// now export this [UserContextProvider] method

export default UserContextProvider;


// axha ya to kam ho gya h ky hmra store bn gya h sb ky pass aa gya h liken is [store] ka access kesy mily ga ? 

// dekhyea kuch log [store] ka access direct [main.jsx] mn dy deaty hn is mn koi msla ni h or kuch log [app.jsx] mn deaty hn is mn b koi issue ni h whn py b same hi kam ho ga 

// now go to [app.jsx] and see what we do there?