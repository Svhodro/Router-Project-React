import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from "./component/Home/Home"
import About from "./component/About/About"
import Contact from "./component/Contact/Contact"

const rauter=createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        path:'/Home',
        element:<Home/>
      },
      {
        path:'/About',
        element:<About/>
      },
      {
        path:'/Contact',
        element:<Contact/>
      }
    ]


}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={rauter} />  
  </React.StrictMode>,
)
