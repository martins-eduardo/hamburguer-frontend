import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { api } from '../../lib/api'

export const signUpSchema = yup.object().shape({
  name: yup.string().required('Required field'),
  email: yup.string().email().required('Required field'),
  password: yup.string().required('Required field'),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Required field'),
  cep: yup.string().required('Required field'),
})

type SignUpSchema = yup.InferType<typeof signUpSchema>

export function SignUp() {
  const [loading, setLoading] = useState(false)

  const signUpForm = useForm({
    resolver: yupResolver(signUpSchema),
  })

  const { handleSubmit } = signUpForm

  const navigate = useNavigate()

  async function handleSignUpSubmit(data: SignUpSchema) {
    try {
      setLoading(true)

      const response = await api.post('/sign-up', {
        name: data.name,
        email: data.email,
        password: data.password,
        cep: data.cep,
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
      <FormProvider {...signUpForm}>
        <form
          id="sign-up-form"
          className="flex flex-col gap-3"
          onSubmit={handleSubmit(handleSignUpSubmit)}
        >
          <Input name="name" placeholder="Nome completo" type="text" />
          <Input name="email" placeholder="E-mail" type="email" />
          <Input name="password" placeholder="Senha" type="password" />
          <Input
            name="confirmpassword"
            placeholder="Confirme sua senha"
            type="password"
          />
          <Input name="cep" placeholder="CEP" type="number" />
        </form>
      </FormProvider>
      <div className="flex flex-col gap-2 max-w-87.5 w-full">
        <Button
          form="sign-up-form"
          type="submit"
          content="Criar conta"
          variants="default"
        />
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
