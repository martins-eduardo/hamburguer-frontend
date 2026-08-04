import type { ComponentProps } from 'react'

interface buttonProps extends ComponentProps<'button'> {
   content: string
   variants: 'default' | 'variant'
}

export function Button({ content, variants, ...props }: buttonProps) {
   function buttonVariant() {
      if (variants === 'default') {
         return 'flex bg-[#C92A0E] rounded-sm h-9 items-center justify-center text-white font-semibold hover:cursor-pointer'
      }
      return 'flex bg-white border-2 border-[#C92A0E] text-[#C92A0E] font-semibold rounded-sm h-9 items-center justify-center hover:cursor-pointer'
   }

   return (
      <button className={buttonVariant()} {...props}>
         {content}
      </button>
   )
}
