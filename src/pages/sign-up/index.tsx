import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function SignUp() {
   const navigate = useNavigate()
   return (
      <div className="flex flex-col h-full justify-center items-center gap-6">
         <img src="./hamburguer-logo.png" alt="" />
         <div className="flex flex-col gap-2">
            <Input placeholder="Nome completo" type="text" />
            <Input placeholder="E-mail" type="email" />
            <Input placeholder="Senha" type="password" />
            <Input placeholder="Confirme sua senha" type="password" />
            <Input placeholder="CEP" type="number" />
         </div>
         <div className="flex flex-col gap-2 max-w-87.5 w-full">
            <Button type="submit" content="Criar conta" variants="default" />
            <Button
               type="button"
               onClick={() => navigate('/sign-in')}
               content="Já tenho uma conta"
               variants="variant"
            />
         </div>
      </div>
   )
}
