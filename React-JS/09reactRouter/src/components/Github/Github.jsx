import React, { useEffect, useState } from "react";
// in this file we see how to get github followers and for this we simply call the [API]

// after line#58 now we use [hook] from [r-r-dom]
import { useLoaderData } from "react-router-dom";
function Github() {
  // now what data return from [loaderData] that should we get easily and store it to a varaiable like

  const data = useLoaderData();
  /*
  const [data, setData] = useState([]);

  // now Question is when i call the [API] ? the answer is I will call the [API] when my this component should be load and for this we study that we use our hook which is [useeffect]
  useEffect(() => {
    // now we simply call our [fetch] method and in this we add link of [github APi] like 🔻

    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  */
  return (
    <>
      <div className="text-center bg-gray-600 text-white p-4 text-3xl">
        {/* now we pass values from the above [data]  by injecting varaible */}
        Github followers : {data.followers}
        <img
          className="rounded-full ml-52 pt-7"
          src={data.avatar_url}
          alt="git pic"
          width={300}
        />
      </div>
    </>
  );
}

export default Github;

/* here is the loader method

// jb bolla gya ky [loader] mn method call kren to intresting bt aai ky [method] khn sy call kren

// for this the mostly / recomandation is that what work you do in [github] file you can make method also in this file too [ta ky usi routes ky ander us ky methods rh jaen ]

// actually this is not good paractise we can do this work in saprate file that is better then this but what we can do this here bcz it is recomandation so we can not change it

// now let see how we make our method

// in this we simply made our [export const githubInfoLoader] and this our basic [async call]  and in this async call what can we do let see

*/
export const githubInfoLoader = async () => {
  // in this now we [fetch] our api which we can do at line #10 and bcz it is [async call] then we [await] our [fetch] basic [js] one o one

  const responce = await fetch(`https://api.github.com/users/hiteshchoudhary`);
  // now the main intresting thing is we can directly [return] our [responce] by converting himinto [json] bcz we didnot return [string]  like 🔻

  return responce.json();

  // now this 🔺 is promises but i can return him

  // now go to line #3
};
