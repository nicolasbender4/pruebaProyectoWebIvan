import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Pedidos, { loader as pedidosLoader } from './pages/Pedidos'
import Login from './pages/Login'
import Index, { loader as usuariosLoader } from './pages/Index'
import NuevoUsuario from './pages/NuevoCliente'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: usuariosLoader
      },
      {
        path: '/usuarios/nuevo',
        element: <NuevoUsuario />
      },
      {
        path: '/pedidos',
        element: <Pedidos />,
        loader: pedidosLoader
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
