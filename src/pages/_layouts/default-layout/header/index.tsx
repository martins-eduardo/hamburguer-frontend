import { Box, LayoutGrid, LogOut, Plus, ShoppingCart } from 'lucide-react'
import { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../../context/UserContext'
import { api } from '../../../../lib/api'

export function Header() {
  const { user, setUser } = useContext(UserContext)

  const navigate = useNavigate()

  const location = useLocation()

  async function handleMeSubmit() {
    try {
      const response = await api.get('/me')

      setUser(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  async function handleLogoutSubmit() {
    try {
      const response = await api.post('/logout')

      setUser(null)
    } catch (error) {
      console.error(error)
    }
  }

  function getNavItemClass(path: string) {
    const baseClass = 'flex p-1 border border-[#F2DAAC] rounded-sm'

    if (location.pathname === path) {
      return `${baseClass} bg-[#F2DAAC] text-[#161410]`
    }
    return `${baseClass} text-[#F2DAAC]`
  }

  useEffect(() => {
    handleMeSubmit()
  }, [])

  return (
    <div className="flex justify-between p-3 items-center w-full md:w-184.25 mx-auto">
      <div className="flex w-full">
        <img src="./hamburguer-logo.png" alt="" />
      </div>
      {user ? (
        <div className="flex w-full justify-end gap-8 items-center">
          {user.role === 'ADMIN' && (
            <div className="flex gap-2 items-center">
              <Link to="/">
                <div className={getNavItemClass('/products')}>
                  <Box />
                </div>
              </Link>
              <Link to="/orders">
                <div className={getNavItemClass('/orders')}>
                  <LayoutGrid />
                </div>
              </Link>
              <div className="flex p-1 border border-[#F2DAAC] text-[#F2DAAC] rounded-sm">
                <Plus />
              </div>
            </div>
          )}

          <div className="relative text-white cursor-pointer">
            <ShoppingCart />
            <span className="flex absolute -top-3 -right-3 h-4 w-4 items-center justify-center bg-[#F2DAAC] rounded-full text-[#161410] font-bold text-sm">
              1
            </span>
          </div>
          <div className="flex text-white">
            <span className="text-xl">
              {user?.name?.split(' ')[0] || user?.name}
            </span>
          </div>
          <div
            className="flex text-white cursor-pointer"
            onClick={() => handleLogoutSubmit()}
          >
            <LogOut />
          </div>
        </div>
      ) : (
        <div
          className="flex justify-center items-center rounded-sm font-semibold bg-[#F2DAAC] w-32 h-9 cursor-pointer"
          onClick={() => navigate('/sign-in')}
        >
          Entrar
        </div>
      )}
    </div>
  )
}
