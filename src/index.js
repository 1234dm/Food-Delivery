import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
import UserContext from "./components/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./components/utils/AppStore";
import Cart from "./components/Cart";

const Grocery = lazy(()=>import("./components/Grocery"));





const AppComponent = () => {
 

  const [userName,setUserName] = useState();

  useEffect(()=>{
    const data = {
    name:"Manav Dave",
    };
    setUserName(data.name);
  },[])

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{logInUser:userName,setUserName}}>

    
    <div className="app">
 <Header/>
 <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  );
};


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppComponent/>,
    errorElement:<Error/>,
children : [
  {
    path: "/",
    element:<Body/>,
  },
  {
    path:"/about",
    element:<About/>,
  },
  {
    path:"/contact",
    element:<Contact/>,
  },
  {
    path:"/grocery",
    element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
  },
  {
    path:"/cart",
    element:<Cart/>
  },
  {
    path:"/ResMenu/:resId",
    element:<ResMenu/>,
  },
]
  },
  
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);