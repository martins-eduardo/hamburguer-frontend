import { type ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function Public({ children }: { children: ReactNode }) {
  const navigate = useNavigate()

  useEffect(() => {
    const cookie = document.cookie

    if (cookie) {
      const cookies = cookie.split('; ')

      const userCookie = cookies.find((e) => e.startsWith('user'))

      if (userCookie) {
        navigate('/', { replace: true })
      }
    }
  }, [navigate])

  return <div>{children}</div>
}
