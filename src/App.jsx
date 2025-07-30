import { Children, useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx'
import Notfound from './components/Notfound/Notfound.jsx'
import Registration from './components/Registration/Registration.jsx';
import Login from './components/Login/Login.jsx';
import Home from './components/Home/Home.jsx'
import Products from './components/Products/Products.jsx';
import CounterContextProvider from './components/Context/CounterContext.jsx';
import UserContextProvider from './components/Context/UserContext.jsx';
import ProtectRoute from './components/ProtectRoute/ProtectRoute.jsx'
import CartContextProvider from './components/Context/CartContext.jsx';

let route = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <ProtectRoute><Home /></ProtectRoute> },
      // { path: '/', element: <Home /> },
      { path: '/products', element: <ProtectRoute><Products /></ProtectRoute> },
      // {path:'/cart', element:<cart/>}
      { path: '/register', element: <Registration /> },
      { path: '/login', element: <Login /> },
      // {path:'*', element:<Notfound/>},
      { path: '*', element: <Notfound /> }
    ]
  }
])
function App() {


  return (
    <>
      <UserContextProvider>
        <CartContextProvider>
          <CounterContextProvider>
            <RouterProvider router={route}>

            </RouterProvider>
          </CounterContextProvider>
        </CartContextProvider>
      </UserContextProvider>
    </>
  )
}

export default App
