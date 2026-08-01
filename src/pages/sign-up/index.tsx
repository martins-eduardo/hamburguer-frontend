import { useNavigate } from 'react-router-dom'
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
            <button
               type="submit"
               className="flex bg-[#C92A0E] rounded-sm h-9 items-center justify-center text-white font-semibold hover:cursor-pointer"
            >
               Criar conta
            </button>
            <button
               type="button"
               className="flex bg-white border-2 border-[#C92A0E] text-[#C92A0E] font-semibold rounded-sm h-9 items-center justify-center hover:cursor-pointer"
               onClick={() => navigate('/sign-in')}
            >
               Não tenho uma conta
            </button>
         </div>
      </div>
   )
}
