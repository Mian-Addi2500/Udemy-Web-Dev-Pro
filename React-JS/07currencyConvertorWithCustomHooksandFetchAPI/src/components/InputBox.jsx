import React, { useId } from "react";

function InputBox({
  // now what we takes from user see below 🔻

  label, //we take lable this will show that you should pass [from] or [to] thats why we use [lable]

  amount, // we take this bcz we see how to show [amount] bcz end of the day everything should be shown there in InputBox

  onAmountChange, // we also take this bcz jo b is componenet ko call kr rha h whn py hm is ki bt kren gy . bcz amount change hoga to [state] bhe to change krni pry gi na or Q ky Input control to yhen sy ho rha h to aik whn py b hm aik [useState] banaen gy [amountchange and onamountchange ] is thra sy taky hmen pta lgy ky kia kia chezen hori hn Q ky deakhyea ky agr hm sirf [from] py amount change krna chyean gy to [API] call usi sy ho jy gi na or sari calculation hmrai wahen sy ho jy gi to wo b to chyea DATA to wo hm [state] mn krn gy. Ya aik method ho ga ab hm kesy us methodko use kren gy bad mn deakhean gy

  onCurrencyChange, //same as [amount] we change our [currency] too by clicking on currency type a list ko types opend

  currencyOptions = [], // I want ky koi na koi array mn hi currency option ap pass kro or in case agr ni kro to mn default aik empty arry to ly ln Q ky currency type ki jo list ati h wo hm sari ki sari hm array sy hi loop through kren gy . ayean gy khn sy hmry pass Q k [JSON] data jo call h is ky about bad mn bt krty hn but mera app crash na ho is leye hm is ko by default aik empty array dean gy

  selectCurrency = "usd", //ab ya Q ? Q k hmry pass list to h currency ki but pata h na select kn c krni h wo b , axha bydefault hm is ko [usd] deye dety hn but ya h ap py ky jo mrzi do, taky at least aik currency to whn py selected rhy

  amountDisable = false, // agr koi user amount ni deana chty ya deana chty hn to wo b hm ly leaty hn wesy is ki khas zarort ni h ya ap py depend h ap chyean to ignor b kr skty hn

  currencyDisable = false,
  className = "", //we use this bcz we take a CSS from user , bcz it is possible that user want to show something diff , so for this we use className and also this CSS used in main div by using {} with `` means we use CSS in JS and we inject this [className] in div by using ${}

  //now step by step use these inputs in our component
}) {
  //=============⭐⭐⭐🪐🪐🪐⭐⭐⭐================
  // this is last step first you complete file then comback here => now we study a [hook] which is [useID] hook and we study this for optimition purpose its depends on you to use it or not

  const amountInputId = useId(); //this will give rendom value and we use it to lable [for] and input [id]

  // after this now we go to our [app.jsx] file bcz majorti of the work completed now [ab is ko jamana baqi h]

  //=============⭐⭐⭐🪐🪐🪐⭐⭐⭐================
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none text-black w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          // check inut field enable or disable by giving [amountDisabled] in disabled property 🔻

          disabled={amountDisable}
          // now ya input field h to koi na koi [value] to ho gi to value khn sy leany gy  🔻

          value={amount}
          //ab agr ya amount 🔺 change hota h to mn kia kroun . to hm janty hn [input] fled ky pass [onChange] property to ati h hm onchange ly lean gy to hm is ko use kesy kroun taky mery commponents sy sub ko pta chl jy ky change aya h, to hm is sy aik [e] event fire krwa skty hn or is event sy aik method call kr skty hn . Axha knsa method call kroun ? hn ji is leye to hm ny [onAmountChange] method bnaya tha wo lia h taky directly jo main hmara jo is ko call kry ga wahen py agr hmara h onAmountCHange h to wahen sy ya method ki hmean access mil jy , ab kreny ko hm yhen sy directly [OnAmountChange] kr skkty hn liken hm ny koi [default] value yhn sy pass ni kr rakhi or kr b ni skty Q k method h kia kro gy is mn kia empty [helow word] pass kro gy kia to whn py posible chances hn ky ya crash  kr jy agr kisi ny ni pass kr rkha to , to ab is ko kesy tackl kren kren , to is ky leye bara hi simple sa syntaxt h ky ap [2 &&] lga do ky agr ya avalable h to hm [onAmount change] ko use kren gy or is mn [e.target.value] ko [number] mn rap kren gy Q ky by default ya hmen [string] mn value deata h     🔻

          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg text-black px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          // what is currenct value of select field which is comes from [selectCurrency] and bydefault its value is 'usd' 🔻

          value={selectCurrency}
          // now when currency  change then value of currency should be change that why we take [onCurrencyChange] method 🔻

          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          // now check is this field enable or disable🔻

          disabled={currencyDisable}
        >
          {/* Now we have remain only one which is [currencyOptions ]Array and we should loop through this currency array  for this we start JS by {} braktes and we take [currecnyOptions] and add loop on it and we use [map] for loop to these options bcz we know in [map] we have access of all values in its callback fn() bcz every currency option access we have that why we call it [currency] but it depends on us what we name take and in this call back we return commponet which is [option] of [select Field]    */}

          {currencyOptions.map((currency) => (
            // Important note 🔻
            // when we return component in loop then every time same value should be repite but the problem is when we have this type of repetion of values then react very instantaly hit the performance bcz React didnot know that react  that create again again dom then he can create every time same element ? to tackel this problem when we loop in [JSX] bcz our DOM elements are made through [JSX] then we pass a [key] and we pass value to key is its depends on us if we want to give value is [index] value of loop it depends on us but we will give [currency ] bcz this is better option taht we will give unique [ya to jo field aa rha h o ly lo ] or we take [ids] too if we work with [database] and [Id] should be most preferable then taking [index]
            <option
              key={currency}
              // now we take values from [JS] and the value is currency
              value={currency}
            >
              {/* to show value to user we also take [currency here 🔻] */}
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

// now we directly export our input then we use it easily there is no issue

export default InputBox;

// but a better approch is that is mostly recomended in large projects in samll project we use directly export but in big projects we use better approch and we study this approch now

// for this approch we make new file in components and write its name is [index.js] and go to that file
