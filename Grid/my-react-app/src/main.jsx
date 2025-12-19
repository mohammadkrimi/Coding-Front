import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.jsx';
import Canban  from "./views/canban.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < App/> 
  </StrictMode>,
)
