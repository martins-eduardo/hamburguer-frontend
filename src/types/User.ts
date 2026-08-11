export interface User {
  id: string
  name: string
  email: string
  cep: string
}

export type UserContextType = {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<null>>
}
