import { yupResolver } from '@hookform/resolvers/yup'
import { useContext, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { UserContext } from '../../context/UserContext'
import { api } from '../../lib/api'

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

  const { setUser } = useContext(UserContext)

  const navigate = useNavigate()

  async function handleSignInSubmit(data: SignInSchema) {
    try {
      setLoading(true)

      const response = await api.post('/sign-in', {
        email: data.email,
        password: data.password,
      })

      console.log(response.data.message)
      navigate('/')
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
          onSubmit={handleSubmit(handleSignInSubmit)}
        >
          <Input name="email" placeholder="E-mail" type="text" />
          <Input name="password" placeholder="Senha" type="password" />
        </form>
      </FormProvider>
      <div className="flex flex-col gap-2 max-w-87.5 w-full">
        <Button
          form="sign-in-form"
          type="submit"
          content="Login"
          variants="default"
        />
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
