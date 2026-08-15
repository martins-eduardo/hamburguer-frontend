import { Outlet } from 'react-router-dom'
import { Header } from '../default-layout/header/index'

export function DefaultLayout() {
  return (
    <>
      <div tabIndex={0} className="md:w-184.25 mx-auto">
        <Header />
        <div className="flex-1 min-h-0 overflow-y-auto bg-[#161410]">
          <Outlet />
        </div>
      </div>
    </>
  )
}
