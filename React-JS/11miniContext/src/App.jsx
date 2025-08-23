// there we should 1st of all import our [userContextProvider]
import UserContextProvider from "./context/UserContextProvider";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    // here we rap it with our [UserContextProvider] and one thing some people do all work of [UserContextProvider.jsx] here in this file but sub ky apny apny useCase hn hm septer kren gy abhi to
    <UserContextProvider>
      {/*
       now in this ap jo b componenet lean gy us commponenet mn ap ko directly provider ka access mily ga  so for this we made some commponenets jis sy ky hmen pta to chly ky kam ho rhah ya ni now made componeents and use them there
       
       for this we made a componenet folder in our src folder and make two file right now but it depends on you that you made 4,5,6,7 so on

       or in 2 files mn hm deakhen gy ky aik mn data access kesy hota h or aik mn data kesy send hota h wo deakh lean gy now go to [Login.jsx] file
       */}
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
