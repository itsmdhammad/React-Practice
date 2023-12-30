import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthLayout from './Layouts/Auth-Layout'
import CustomerLayout from './Layouts/Customer-Layout'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthLayout /> */}
    <CustomerLayout />
  </React.StrictMode>,
)
