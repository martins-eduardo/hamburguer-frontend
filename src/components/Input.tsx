import { useFormContext } from 'react-hook-form'

interface InputProps {
  placeholder: string
  type: string
  name: string
}

export function Input({ placeholder, type, name }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = errors[name]?.message

  return (
    <div>
      <input
        {...register(name)}
        className="w-87.5 h-9 bg-white p-2 outline-none rounded-sm text-[#32343E] placeholder-[#32343E]"
        placeholder={placeholder}
        type={type}
      />

      {error && <span className="text-red-500 text-sm">{String(error)}</span>}
    </div>
  )
}
