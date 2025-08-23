// in this we get/receive data and show it to our page
import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  //   now we do conditional [return]
  if (!user) return <div>please login</div>;

  return (
    <div>
      Welcome : {user.username} and Password : {user.password}
    </div>
  );
}

export default Profile;
