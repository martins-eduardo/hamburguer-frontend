export type Role = 'USER' | 'ADMIN'
export interface User {
  id: string
  name: string
  email: string
  cep: string
  role: Role
}

export type UserContextType = {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<null>>
}
