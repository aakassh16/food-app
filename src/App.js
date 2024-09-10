import React, {lazy, Suspense} from "react";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import { createBrowserRouter, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

  const [userName, setUserName] = useState();

  // Authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: 'Akash K',
    };
    setUserName(data.name);
  }, []);

  return (
    <div className="app">
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
        </UserContext.Provider>
        <Outlet />
      </Provider>
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/food-app",
        element: <Body />
      },
      {
        path: "/food-app/about",
        element: <About />
      },
      {
        path: "/food-app/contact",
        element: <Contact />
        },
      {
        path: "/food-app/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/food-app/cart",
        element: <Cart />
        },
      {
        path: "/food-app/restaurants/:resId",
        element: <RestaurantMenu />,
        },
    ],
      errorElement: <Error />
      },
])



export default AppLayout;