import { useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import { Input } from '../../components/Input'
import { api } from '../../lib/api'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'

export const signInSchema = yup.object().shape({
   email: yup.string().email().required('Required field'),
   password: yup.string().required('Required field'),
})

type SignInSchema = yup.InferType<typeof signInSchema>

export function SignIn() {
   const signInForm = useForm({
      resolver: yupResolver(signInSchema),
   })

   const { handleSubmit } = signInForm

   const [loading, setLoading] = useState(false)

   const navigate = useNavigate()

   async function handleSignSubmit(data: SignInSchema) {
      try {
         setLoading(true)

         const response = await api.post('/sign-in', {
            email: data.email,
            password: data.password,
         })

         console.log(response.data)
      } catch (error) {
         console.error(error)
      } finally {
         setLoading(false)
      }
   }

   return (
      <div className="flex flex-col h-full justify-center items-center gap-6">
         <img src="./hamburguer-logo.png" alt="" />
         <FormProvider {...signInForm}>
            <form
               id="sign-in-form"
               className="flex flex-col gap-2"
               onSubmit={handleSubmit(handleSignSubmit)}
            >
               <Input name="email" placeholder="E-mail" type="text" />
               <Input name="password" placeholder="Senha" type="password" />
            </form>
         </FormProvider>
         <div className="flex flex-col gap-2 max-w-87.5 w-full">
            <button
               form="sign-in-form"
               disabled={loading}
               type="submit"
               className="flex bg-[#C92A0E] rounded-sm h-9 items-center justify-center text-white font-semibold hover:cursor-pointer"
            >
               Login
            </button>
            <button
               disabled={loading}
               type="button"
               className="flex bg-white border-2 border-[#C92A0E] text-[#C92A0E] font-semibold rounded-sm h-9 items-center justify-center hover:cursor-pointer"
               onClick={() => navigate('/sign-up')}
            >
               Não tenho uma conta
            </button>
         </div>
      </div>
   )
}
