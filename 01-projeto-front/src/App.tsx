import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import GlobalStyle from './styles/global'

import { AuthProvider } from './hooks/AuthContext'
import { ToastProvider } from './hooks/ToastContext'

import Routes from './routes'

const App: React.FC = () => (
  <BrowserRouter>
  
    <AuthProvider>
      <ToastProvider>
        <Routes />
      </ToastProvider>
    </AuthProvider>

    <GlobalStyle />
  </BrowserRouter>
)

export default App;
