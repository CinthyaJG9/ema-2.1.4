import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/react'

interface Counter {
  isComplete: boolean
}

const useCounter = ({ isComplete }: Counter) => {
  const [counter, setCounter] = useState(3)
  const router = useRouter()
  useEffect(() => {
    if (isComplete) {
      const interval = setInterval(() => {
        setCounter(counter - 1)
      }, 1000)

      if (counter === 2) {
        signOut()
        clearInterval(interval)
        router.push('/login')
      }
    }
  }, [isComplete, counter])

  return { counter }
}

export default useCounter
