import { LoaderCircle } from 'lucide-react'
import { type ReactNode, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export function Public() {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cookie = document.cookie

    if (cookie) {
      const cookies = cookie.split('; ')

      const userCookie = cookies.find((e) => e.startsWith('user'))

      if (userCookie) {
        navigate('/', { replace: true })
      }
    }

    setLoading(false)
  }, [navigate])

  return (
    <div>
      {loading === true ? (
        <LoaderCircle className="animate-spin" />
      ) : (
        <Outlet />
      )}
    </div>
  )
}
