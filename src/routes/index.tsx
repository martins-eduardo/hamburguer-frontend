import { Route, Routes as Router, Navigate } from 'react-router-dom'
import { DefaultLayout } from '../pages/_layouts/default-layout/index'
import { AuthLayout } from '../pages/_layouts/auth-layout/index'
import { SignIn } from '../pages/sign-in'
import { SignUp } from '../pages/sign-up'

export function Routes() {
   return (
      <Router>
         <Route element={<DefaultLayout />}>
            {/* <Route path="/" element={<Navigate to="/products" />} /> */}
            {/* <Route path="/products" element={} /> */}
         </Route>
         <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
         </Route>
      </Router>
   )
}
