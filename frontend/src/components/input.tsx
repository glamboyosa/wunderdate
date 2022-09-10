import { forwardRef } from 'react'
import { TInputRef } from '../utils/types'

const Input = forwardRef<TInputRef>((_, ref) => {
  return (
    <textarea
      ref={ref}
      className="w-2/5 p-3 border-2 border-black break-words whitespace-pre-line border-solid text-base"
      placeholder="Message"
    />
  )
})

Input.displayName = 'Input'
export default Input
