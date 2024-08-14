import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import MHzHome from './components/pages/MHzHome';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/MHz" element={<MHzHome />} />
      </Routes>
    </>
  );
}

export default App;
