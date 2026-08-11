import { type ReactNode, createContext, useState } from 'react'
import type { UserContextType } from '../types/User'

type UserProviderProps = {
  children: ReactNode
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
})

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
