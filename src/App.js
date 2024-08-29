import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import MHzHome from './components/pages/MHzHome';
import ContactPage from './components/pages/ContactPage';
import ServiceViralPage from './components/pages/ServiceViralPage';

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/MHz" element={<MHzHome />} />
        <Route path="/MHz/Contact" element={<ContactPage />} />
        <Route path="/MHz/ServiceCV" element={<ServiceViralPage />} />
      </Routes>
    </>
  );
}

export default App;
