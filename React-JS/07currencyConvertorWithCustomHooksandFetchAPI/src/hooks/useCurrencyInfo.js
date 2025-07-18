// ⭐Step # 1 ⭐
// in this we made our custome hook
// 🪐🪐custom hook also use built-in hooks too
// now in our case we use 2 thing 🔻

import { useEffect, useState } from "react";

// now we right our fn()
// fn() name depends on you to write but I will use right now is [useCurrencyInfo]

// we use keyword [use] bcz it is comon in coding term for hook that's why we use this keyword but it is not nessery to use this keyword but this is good practise thats why we use this keyword

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  // In this fn() we call API but we use directly use fetch method but I want when this Hook load or anyone use this hook then I want to call this Api for this we study already which is useEffect hook

  // by this method auto my fetch call and I didnot made an other fn() in this fn() that now fn() call and now call my Api . we didnot do this

  // in this we directly do our work

  useEffect(() => {
    fetch(
      `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
    )
      .then((responce) => responce.json())
      .then((responce) => setData(responce[currency]));
    // console.log(data);
  }, [currency]);
  // console.log(data);
  return data;
}

export default useCurrencyInfo;

// now we see what we do on top 🔺

// in this we design a funcationality and return the cmplet fn() by using export default

// Now in what steps our fn() work

// 1. we use fn() name with keyword [use] this shows this is hook and this is good praciteses but we can change name it depends on us , but best is using [use keyword]

// 2. many hook takes optional arrguments but in our case our hook take manually arrgument in form of [currency]

// 3.Now I want to call an API which is [currency API] and we directly call this API in [fetch] but we use [useEffect] bcz I want when anyone use or load this hook the API should be fetched

// 4.Now the [useEffect] take 2 things 1 is call-back fn() and other is [dependencies Array] meany in thing any change comes I will call API again

// 5.Now we call [fetch] method and give API URL in [ ` ` ] backticks

// 6. now we chaning⛓⛓ by using [.then] and in 1st [.then] what we get we know [.then] have call-back in it and in call-back we get [responce]

// 7.Now when we get [responce] it comes into [string] formate most of the time and we convert it to [JSON] by using [responce.json()]

// 8. After conversion into JSON now we hold this [responce] using [.then] and now we know now responce which comes is in [json] form but same thing that where we hold this data and when we hold [data] in regular variable then in UI then DAta should not update

// 9. to tackel the above problem we directly return the value from [useState] for this we make data and set data varaiable using useState and in useState we directly add [empty object] bcz if incase if fetch call etc are not comes then atleast {} should go and crash chance not created

// 10. now when in 2nd [.then] responce comes. we use setData and in the responce we use currency bcz we want to get key and we know in our API when [currency] changes the key should be changes mean when we write [usd] in url the key should be [url] so for this we use[currency]

// 11. now when we call the fetch in [useEffect] for this we give currncy in [dependency array] bcz when curruncy chnge [fetch] called

// 12. now what I return by this method we only and only return [data]

// 13. now when we return [data] then it mean we didnot setData value kabhi bhi? ya currency ni kr paen gy ? is ka jwab h [ni] bcz for this we have a funcationality that is [export default useCurrencyInfo] , that why we call him custom hook bcz we have a syntax  ==> export default useCurrencyInfo   <==

// 14. now what I can do actually ? => I can desigine a funcationality and I will retun [pory ky pory mean complet] method which is [useCurrencyInfo] and when we see our [useState Hook] that also do the same thing that it desing funcationality and retun whole fn() by [export default concept]

// 15. now from that method what what value we can drives bcz that method also end of the day return [data] so I can access [data] from there

// 16. now our custom hook design complete

// 17. now in next part we see how we reuse our components for this we make an other folder in [src] folder which name is [components]

// 18. in this folder we made 2 componenets we made more then 1 commpent bcz we study when we made more componenets in our folder then also we use approch of [export] and we also take regular approch it totaly depends on us what approch we can take

// 19. now go to [input.jsx] component and see whats happening there?
