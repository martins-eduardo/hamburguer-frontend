import { Input } from './components/Input'
import { Header } from './Header'

export function App() {
   return (
      <div className="flex flex-col justify-between gap-4">
         <Header />
         <Input placeholder="E-mail" type="text" />
         <Input placeholder="Senha" type="password" />
      </div>
   )
}
