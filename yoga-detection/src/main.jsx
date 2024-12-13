import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import CameraPage from './components/CameraPage.jsx';
import PoseDetail from './components/PoseDetail.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Camera" element={<CameraPage />} />
      <Route path="/pose/:name" element={<PoseDetail />} />
    </Routes>
  </BrowserRouter>,
)
