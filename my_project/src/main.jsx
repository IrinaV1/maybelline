import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu/Menu.jsx"
import Newsletter from './pages/Newsletter/Newsletter.jsx'; 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
