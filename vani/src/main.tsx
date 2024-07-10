import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api';
import './componentes/Idioma/I18n.tsx';
// import Navbar from './Layout/Navbar.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrimeReactProvider>
        {/* <Navbar /> */}
        <App />
      </PrimeReactProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
