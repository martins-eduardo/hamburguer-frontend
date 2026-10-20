import { BrowserRouter } from 'react-router-dom'
import { CartItemsProvider } from './context/CartItemsContext'
import { UserProvider } from './context/UserContext'
import { Routes } from './routes'

export function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <CartItemsProvider>
          <Routes />
        </CartItemsProvider>
      </UserProvider>
    </BrowserRouter>
  )
}
