import { Outlet } from 'react-router-dom'

export function AuthLayout() {
   return (
      <div
         tabIndex={0}
         className="flex-1 h-screen justify-center mx-auto md:w-87.5 w-full"
      >
         <Outlet />
      </div>
   )
}
