import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return (
    <>
      <div>followers : {data.followers}</div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const responce = await fetch(`https://api.github.com/users/hiteshchoudhary`);

  return responce.json();
};
