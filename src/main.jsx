import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router/router'
import { RouterProvider } from 'react-router'
import AuthProvider from './contexts/AuthProvider'
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
    <RouterProvider router={router} />
          <Toaster />
    </AuthProvider>
  </StrictMode>,
)
