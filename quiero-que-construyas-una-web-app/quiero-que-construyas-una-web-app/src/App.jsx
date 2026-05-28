import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import AnswerScreen from './components/AnswerScreen.jsx'
import BrandHeader from './components/BrandHeader.jsx'
import FacultySelect from './components/FacultySelect.jsx'
import FinalResult from './components/FinalResult.jsx'
import GameScreen from './components/GameScreen.jsx'
import StartScreen from './components/StartScreen.jsx'
import { saveGame } from './utils/storage.js'

export default function App() {
  const [screen, setScreen] = useState('start')
  const [faculty, setFaculty] = useState('')
  const [feedback, setFeedback] = useState(null)
  const [result, setResult] = useState(null)

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
      correct: summary.correct,
      total: summary.total,
      createdAt: new Date().toISOString(),
      contact: {
        instagram: '',
        whatsapp: '',
      },
    }
    saveGame(game)
    setResult(game)
    setScreen('final')
  }

  function restart() {
    setFeedback(null)
    setResult(null)
    setFaculty('')
    setScreen('faculty')
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
          <FinalResult key="final" result={result} onRestart={restart} />
        )}
      </AnimatePresence>
    </div>
  )
}
