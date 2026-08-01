import { Outlet } from 'react-router-dom'
import { Header } from '../default-layout/header/index'

export function DefaultLayout() {
   return (
      <>
         <div tabIndex={0}>
            <Header />
            <div className="flex-1 min-h-0 overflow-y-auto pb-2 ml-0 lg:ml-64 bg-[#161410]">
               <Outlet />
            </div>
         </div>
      </>
   )
}
