import { Children, useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx'
import Notfound from './components/Notfound/Notfound.jsx'
import Registration from './components/Registration/Registration.jsx';
import Login from './components/Login/Login.jsx';
import Home from './components/Home/Home.jsx'

let route = createBrowserRouter([
  {path:'', element:<Layout/>, children:[
    {path:'/', element:<Home/>},
    // {path:'*', element:<Products/>},
    {path:'/register', element:<Registration/>},
    {path:'/login', element:<Login/>},
    // {path:'*', element:<Notfound/>},
    {path:'*', element:<Notfound/>}
  ]}
])
function App() {
 

  return (
    <>
     <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
 