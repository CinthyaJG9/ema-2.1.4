import { useState, useEffect, useContext } from 'react'
import { RegisterContext } from '../context'
import { AuthService } from '@/services/ema/V1'
import { toast, toastConfig } from '@/libs'

const customId = 'custom-id-RegisterPage'
const useSendData = () => {
  const [isComplete, setIsComplete] = useState(false)
  const { personalData, academicData, setIndexActive } =
    useContext(RegisterContext)

  useEffect(() => {
    if (personalData && academicData) {
      toast.loading('Validando datos...', {
        toastId: customId,
        autoClose: 2000,
        position: 'top-right',
        ...toastConfig
      })

      AuthService.registerStudent({
        ...personalData,
        ...academicData
      }).then(({ message }) => {
        if (message) {
          console.log('Ocurrió un error')
          console.log(message)

          toast.update(customId, {
            render: 'Ocurrió un error 😓',
            type: 'error',
            isLoading: false,
            autoClose: 2000,
            ...toastConfig
          })
        }
        if (!message) {
          console.log('Usuario registrado')
          toast.update(customId, {
            render: 'Usuario registrado 😊',
            type: 'success',
            isLoading: false,
            autoClose: 2000,
            ...toastConfig
          })
          setIndexActive(3)
          setIsComplete(true)
        }
      })
    }
  }, [personalData, academicData])
  return { isComplete }
}

export default useSendData
