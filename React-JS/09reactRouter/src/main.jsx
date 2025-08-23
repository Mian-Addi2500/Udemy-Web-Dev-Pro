import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";
/*
⭐⭐1st way of creating [router] ⭐⭐

const router = createBrowserRouter([
  {
    path: "/",
    // 🔺this is top level element and is ky ander nesting ho rhi h So what an this should be rander to wo element is ko btanaa prta h jo ky hmara h [layout ] like 🔻

    element: <Layout />,

    // now we have another prop in it if we want to add more [childerns] and we want to add them cz we have childern [home, about, contact us etc.] now we add children and we know we have other values in childern then obviusly we add an array like 🔻

    children: [
      // now what is further in this array ? we have objets in this [array] like 🔻
      {
        // now what can we take in this object we take same [path and element] like🔻
        path: "",
        element: <Home />,
      },
      {
        // we can not use '/' bcz it already taken
        path: "about",
        element: <About />,
      },
      {
        // we can not use '/' bcz it already taken
        path: "contact-us",
        element: <Contact />,
      },
    ],
  },
]);
*/

// ⭐⭐2nd way of creating [router]⭐⭐

// this way is little bit easy rather then 1st one

// now see how to make [router] let see

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      {/* in this section we see how we get user info from url  */}

      {/* in path after [user/:] the value is very important and note down it in our case is [userid] */}

      <Route path="user/:userid" element={<User />} />

      {/* 🔺now in our main menu we didnot have any path to go to [user] */}

      {/*⭐⭐ this is 🔻 for github component⭐⭐ */}

      <Route
        // in this loader [concept] we see when we go to github link it will load all data intantly before clicking to [github] in nav bar [g hn ya {useEffect} sy b phly kerta h load data ko }

        // loader anpny ander callback rakhta h aesy [loader = {()=>}] or hm yhen py [api] call kr skty hn ismn koi b issue ni h

        // leken hm is ky leye [method] banaen gy or us ko [loader] mn call kr lean gy

        // for this we go to [github] file at line #31
        loader={githubInfoLoader}
        path="/github"
        element={<Github />}
      />
    </Route>
  )
);

// SO this 🔺 was our 2nd way which look little bit easy rather then 1st for routing in this we use same [createBrowserRouter] and in this we give an other router method which is [createRoutesFromElements] and in this method we give main [route element] and in this main [route] we further give [self closing Route] one by one with [path] and [elements] and our routing should be done
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
