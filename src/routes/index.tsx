import { Navigate, Route, Routes as Router } from 'react-router-dom'
import { AuthLayout } from '../pages/_layouts/auth-layout/index'
import { DefaultLayout } from '../pages/_layouts/default-layout/index'
import { Products } from '../pages/products'
import { SignIn } from '../pages/sign-in'
import { SignUp } from '../pages/sign-up'

export function Routes() {
  return (
    <Router>
      <Route>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
    </Router>
  )
}
