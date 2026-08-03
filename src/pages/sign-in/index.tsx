import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function SignIn() {
   const navigate = useNavigate()
   return (
      <div className="flex flex-col h-full justify-center items-center gap-6">
         <img src="./hamburguer-logo.png" alt="" />
         <div className="flex flex-col gap-2">
            <Input placeholder="E-mail" type="text" />
            <Input placeholder="Senha" type="password" />
         </div>
         <div className="flex flex-col gap-2 max-w-87.5 w-full">
            <Button type="submit" content="Login" variants="default" />
            <Button
               type="button"
               onClick={() => navigate('/sign-up')}
               content="Não tenho uma conta"
               variants="variant"
            />
         </div>
      </div>
   )
}
