import { useEffect, useState } from 'react'

interface ScreenSize {
  width: number | undefined
  height: number | undefined
}

const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: undefined,
    height: undefined
  })
  useEffect(() => {
    const handleResize = (): void => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return (): void => window.removeEventListener('resize', handleResize)
  }, [])

  return screenSize
}

export default useScreenSize
