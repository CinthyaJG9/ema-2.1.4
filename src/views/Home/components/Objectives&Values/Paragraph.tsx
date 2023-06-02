import { FC } from 'react'

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  title: string
}
const Paragraph: FC<Props> = ({ title, ...props }) => {
  return (
    <p
      className='w-full font-normal text-gray-700 dark:text-gray-400'
      {...props}
    >
      {title}
    </p>
  )
}

export default Paragraph
