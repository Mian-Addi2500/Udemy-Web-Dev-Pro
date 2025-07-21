import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* 
          
          
          🪐⭐🪐
             
             Why we use {Link } rather then {a} tage?

        ans : bcz {a} tag reload / repaint complete page that's why we use [Link] bcz it use in [react-router-dom {rrd}] for moving from 1 page to an other page and in the place of [href] in [a] tag we use [to] in [link] tag

            when we have [link] then why we use [NavLink] ? 

        ans: bcz [navlink] have aditional properties then [link]

             
             🪐⭐🪐
             
             */}

          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  /*  
                  🪐⭐🪐

                    when we see in [navLink] this time strutcher is little bit diff. bcz when we write [css] we simply write them in [className] but this time we write classes in callback fn() and we write all [css] in [``] . now Q is why we do this ?

                    this bcz  we want to Highlight navbar tabs for this one of the best why to write classes in callback fn() . now study how to take benifate of this callback fn(). when we take [navlink] and in this we have [className] with callback in this we have derectly access a varaiable which name is [isActive]. now when we have this [isActive] then we use this varaible to ask question easily. leet see how

                  🪐⭐🪐
                  */
                  className={(isActive) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
