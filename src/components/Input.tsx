interface InputProps {
   placeholder: string
   type: string
}

export function Input({ placeholder, type }: InputProps) {
   return (
      <input
         className="w-87.5 h-9 bg-white p-2 outline-none rounded-sm text-[#32343E] placeholder-[#32343E]"
         placeholder={placeholder}
         type={type}
      />
   )
}
