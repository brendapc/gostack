import React from 'react';

import SignIn from './pages/SignIn'
//import SignUp from './pages/SignUp'
import GlobalStyle from './styles/global'

import { AuthProvider } from './hooks/AuthContext'
import { ToastProvider } from './hooks/ToastContext'

const App: React.FC = () => (
  <>
    <AuthProvider>
      <ToastProvider>
        <SignIn />
      </ToastProvider>
    </AuthProvider>

    <GlobalStyle />
  </>
)

export default App;
