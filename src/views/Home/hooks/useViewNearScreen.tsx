import { useEffect } from 'react'
import useHomeContext from './useHomeContext'

interface Props {
  refreshView: 'Inicio' | 'Philosophy' | 'Mission' | 'Objectives'
  isNearScreen: boolean
}

const useViewNearScreen = ({ refreshView, isNearScreen }: Props) => {
  const {
    setIsInicioNearScreen,
    setIsPhilosophyNearScreen,
    setIsMissionNearScreen,
    setIsObjectivesNearScreen
  } = useHomeContext()

  useEffect(() => {
    if (refreshView === 'Inicio') setIsInicioNearScreen(isNearScreen)
    if (refreshView === 'Philosophy') setIsPhilosophyNearScreen(isNearScreen)
    if (refreshView === 'Mission') setIsMissionNearScreen(isNearScreen)
    if (refreshView === 'Objectives') setIsObjectivesNearScreen(isNearScreen)
  }, [isNearScreen, refreshView])

  return {}
}

export default useViewNearScreen
