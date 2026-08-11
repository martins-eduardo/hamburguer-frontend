import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import { Routes } from './routes'

export function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes />
      </UserProvider>
    </BrowserRouter>
  )
}
