import { FC } from 'react'
import { BASE_CLOUDINARY_URL } from '@/libs'
import Image from 'next/image'

interface Props {
  img: string
  alt: string
  width?: number
  height?: number
}

const InfoImg: FC<Props> = ({ img, alt, width, height }) => {
  return (
    <div className='hidden h-full w-full place-items-center lg:grid'>
      <Image
        className=' object-cover'
        src={`${BASE_CLOUDINARY_URL}/image/upload/c_scale,h_${
          height ?? 315
        }/v1681327279/Ema/App/${img}`}
        alt={alt}
        width={width ?? 415}
        height={height ?? 315}
        priority
      />
    </div>
  )
}

export default InfoImg
