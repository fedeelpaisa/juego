import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { questions } from '../data/questions.js'
import { isCorrectAnswer, pickQuestions } from '../utils/game.js'
import QuestionCard from './QuestionCard.jsx'

export default function GameScreen({ faculty, onFeedback, onFinish }) {
  const roundQuestions = useMemo(() => pickQuestions(questions, 5), [])
  const [index, setIndex] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [selected, setSelected] = useState('')
  const [writingValue, setWritingValue] = useState('')

  const question = roundQuestions[index]

  useEffect(() => {
    setSelected('')
    setWritingValue('')
  }, [index])

  function handleAnswer(answer) {
    const ok = isCorrectAnswer(question, answer)
    const nextCorrect = correct + (ok ? 1 : 0)
    setCorrect(nextCorrect)
    onFeedback({
      isCorrect: ok,
      question,
      progress: index + 1,
      total: roundQuestions.length,
      onNext: () => {
        if (index + 1 >= roundQuestions.length) {
          onFinish({ faculty, correct: nextCorrect, total: roundQuestions.length })
        } else {
          setIndex(index + 1)
        }
      },
    })
  }

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-8 pb-8">
      <div className="mx-auto grid max-w-7xl gap-5">
        <div className="flex flex-wrap items-center justify-between gap-4 border-y border-white/15 py-4">
          <p className="font-display text-3xl uppercase text-white">{faculty}</p>
          <p className="font-display text-3xl uppercase text-white/80">
            Destino {index + 1}/{roundQuestions.length}
          </p>
        </div>

        <AnimatePresence mode="wait">
          <QuestionCard
            key={question.id}
            question={question}
            selected={selected}
            setSelected={setSelected}
            onAnswer={handleAnswer}
            writingValue={writingValue}
            setWritingValue={setWritingValue}
          />
        </AnimatePresence>
      </div>
    </motion.main>
  )
}
