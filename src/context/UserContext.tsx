import { type ReactNode, createContext, useState } from 'react'
import type { UserContextType } from '../types/User'

type userProviderProps = {
  children: ReactNode
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
})

export function UserProvider({ children }: userProviderProps) {
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
