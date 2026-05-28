import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import AnswerScreen from './components/AnswerScreen.jsx'
import BrandHeader from './components/BrandHeader.jsx'
import FacultySelect from './components/FacultySelect.jsx'
import FinalResult from './components/FinalResult.jsx'
import GameScreen from './components/GameScreen.jsx'
import RankingScreen from './components/RankingScreen.jsx'
import StartScreen from './components/StartScreen.jsx'
import { clearGames, getGames, saveGame } from './utils/storage.js'

export default function App() {
  const [screen, setScreen] = useState('start')
  const [faculty, setFaculty] = useState('')
  const [feedback, setFeedback] = useState(null)
  const [result, setResult] = useState(null)
  const [games, setGames] = useState([])

  useEffect(() => {
    setGames(getGames())
  }, [])

  function goFullscreen() {
    const element = document.documentElement
    if (!document.fullscreenElement && element.requestFullscreen) {
      element.requestFullscreen()
    }
  }

  function startGame(selectedFaculty) {
    setFaculty(selectedFaculty)
    setScreen('game')
  }

  function showFeedback(nextFeedback) {
    setFeedback({
      ...nextFeedback,
      onNext: () => {
        setFeedback(null)
        setScreen('game')
        nextFeedback.onNext()
      },
    })
    setScreen('answer')
  }

  function finishGame(summary) {
    const game = {
      id: globalThis.crypto?.randomUUID?.() || `game-${Date.now()}`,
      name: 'Jugador anónimo',
      faculty: summary.faculty,
      score: summary.score,
      correct: summary.correct,
      total: summary.total,
      createdAt: new Date().toISOString(),
      contact: {
        instagram: '',
        whatsapp: '',
      },
    }
    const nextGames = saveGame(game)
    setGames(nextGames)
    setResult(game)
    setScreen('final')
  }

  function restart() {
    setFeedback(null)
    setResult(null)
    setFaculty('')
    setScreen('faculty')
  }

  function resetRanking() {
    if (window.confirm('¿Resetear todo el ranking guardado en esta pantalla?')) {
      clearGames()
      setGames([])
    }
  }

  return (
    <div className="app-shell min-h-screen bg-night text-white">
      <div className="noise" />
      <BrandHeader onFullscreen={goFullscreen} />
      <AnimatePresence mode="wait">
        {screen === 'start' && <StartScreen key="start" onStart={() => setScreen('faculty')} />}
        {screen === 'faculty' && <FacultySelect key="faculty" onSelect={startGame} />}
        {screen === 'game' && <GameScreen key="game" faculty={faculty} onFeedback={showFeedback} onFinish={finishGame} />}
        {screen === 'answer' && feedback && <AnswerScreen key="answer" feedback={feedback} />}
        {screen === 'final' && result && (
          <FinalResult key="final" result={result} onRanking={() => setScreen('ranking')} onRestart={restart} />
        )}
        {screen === 'ranking' && <RankingScreen key="ranking" games={games} onRestart={restart} onReset={resetRanking} />}
      </AnimatePresence>
    </div>
  )
}
