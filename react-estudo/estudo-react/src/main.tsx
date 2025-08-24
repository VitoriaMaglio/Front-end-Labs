import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './routes/Home'
import Produtos from './routes/Produtos'
import Error from './routes/Error'
import EditarProdutos from './routes/EditarProdutos'

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/produtos",
        element: <Produtos />
      },
      {
        path: "/produtos/editar/:id",
        element: <EditarProdutos />
      }
    ]
  }
])

export default function Root() {
  return <RouterProvider router={router} />
}

ReactDOM.createRoot(document.getElementById('root')as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)



