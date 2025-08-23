import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      {/* 
      here I want to add dynamicaly things like home,about,contact us e.t.c for this we have an intersting thing from [rrdom] which name is [outlet]  
      
      now this [outlet] can us this [layout] file as a base and in this what things can comes from above or bottom [jo b hm dean gy same rakhy ga] and [jhn py b hm ny [outlet] dy deaya whn py hm chezoun ko change kr skty hn ] 

      now header should be same and footer also but inside them things should be changed 


      ⭐⭐ now jo hm ny [layout] bnaya h is ko use krny ka b aik syntax h aesy ni h ky bs ja ky khen py b use kr lo is ko is thra sy use ni hota actullay  mn hm ko [index] file mn btana prta h ky deakho mn aik [layout  ] use kr rha hn or us ky ander dy rha hn sara kuch 

      bcz routing ho kesy rhi h [home] ky ander [about Us] h [home ] ky ander [contact us ] h . to nesting to ho hi rhi h [/] ky ander h sub . to isi thra sy is ko kesy deakhty hn wo sb hm discus krty hn. for this we go to [main.jsx] 


      now go to mian.jsx
      */}

      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
