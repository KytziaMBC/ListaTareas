import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 1. Importamos la librería de AWS Amplify
import { Amplify } from 'aws-amplify'

// 2. Configuramos Amplify con los datos que te dio Terraform
// Reemplaza los valores de las comillas con tus IDs reales
Amplify.configure({
  Auth: {
    Cognito: {
      region: 'us-east-1',
      userPoolId: 'us-east-1_jvyIlCaoe', // Ejemplo: us-east-1_abcd123
      userPoolClientId: '5gqvtgpdfoi0rmm0f6qt209i33', // Ejemplo: 7abc1234567890
      loginWith: {
        email: true
      }
    }
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)