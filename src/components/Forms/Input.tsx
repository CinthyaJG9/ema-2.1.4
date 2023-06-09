import { FC } from 'react'
import type { UseFormRegisterReturn, FieldError } from 'react-hook-form'
interface Props {
  type: string
  placeholder: string
  register: UseFormRegisterReturn
  errors: FieldError | undefined | null
  icon?: JSX.Element
  value?: string | number | Date
  disabled?: boolean
}

const Input: FC<Props> = ({
  type,
  placeholder,
  register,
  errors,
  icon,
  value,
  disabled
}) => {
  return (
    <div className='group relative z-0 w-full'>
      <input
        type={type}
        className={`peer block w-full appearance-none rounded-lg border-2 bg-transparent p-2 focus:border-sky-500 focus:outline-none focus:ring-0 ${
          !errors
            ? 'border-gray-300 focus:border-sky-300'
            : 'border-red-500 focus:border-red-500'
        } ${
          type === 'date' && (!value || value === '')
            ? 'pl-4  text-gray-400'
            : 'text-gray-700 dark:text-gray-100 '
        }`}
        placeholder=' '
        disabled={disabled}
        {...register}
      />
      <label
        className={`absolute top-[9.6px] left-4 ${
          (!value || value === '') && type !== 'date' ? '-z-10' : 'z-0'
        } ${
          !errors
            ? 'text-gray-400 peer-focus:text-sky-300'
            : 'text-red-500 peer-focus:text-red-500'
        } origin-[0] -translate-y-[24px] scale-75 transform bg-primary-light px-2 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-4 peer-focus:z-0 peer-focus:-translate-y-[24px] peer-focus:scale-75 peer-focus:bg-white peer-focus:px-2 peer-focus:font-medium dark:bg-tertiary dark:peer-focus:bg-tertiary `}
      >
        {placeholder}
      </label>
      {icon}
      <p className='m-1 h-5 text-xs italic text-red-500 first-letter:uppercase'>
        {errors?.message}
      </p>
    </div>
  )
}

export default Input
