
import { Route, Routes } from 'react-router-dom'
import { Home } from './Layout/Home'

import "primereact/resources/themes/lara-dark-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Layout/Navbar';
import { useState } from 'react';



function App() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Routes>
        <Route index element={<Home setActiveSection={setActiveSection} />} />
      </Routes>
    </>
  )
}

export default App
