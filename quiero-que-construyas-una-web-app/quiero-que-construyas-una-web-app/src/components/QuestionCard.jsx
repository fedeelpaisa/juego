import { motion } from 'framer-motion'
import ImageFallback from './ImageFallback.jsx'
import MapQuestion from './MapQuestion.jsx'
import WritingQuestion from './WritingQuestion.jsx'
import NeonButton from './NeonButton.jsx'

export default function QuestionCard({ question, selected, setSelected, onAnswer, writingValue, setWritingValue }) {
  const options = question.options || []

  return (
    <motion.section
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      className="grid h-full content-start gap-6"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="mb-2 text-sm uppercase tracking-[0.24em] text-lime">Destino {question.country}</p>
          <h2 className="font-display text-5xl uppercase text-white md:text-7xl">{question.question}</h2>
        </div>
      </div>

      {question.type === 'map' ? (
        <MapQuestion question={question} selected={selected} onSelect={setSelected} />
      ) : question.type === 'writing' ? (
        <WritingQuestion
          question={question}
          value={writingValue}
          onChange={setWritingValue}
          onSubmit={() => onAnswer(writingValue)}
        />
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {question.image ? (
            <ImageFallback src={question.image} label={question.answer} country={question.country} />
          ) : (
            <div className="destination-frame grid min-h-[320px] place-items-center border-2 border-white/20 bg-[radial-gradient(circle_at_50%_40%,rgba(255,43,214,0.26),transparent_30%),linear-gradient(135deg,#06110c,#0b0b0b)] p-8">
              <p className="font-display text-6xl uppercase text-white">{question.country}</p>
            </div>
          )}
          <div className="grid grid-cols-1 gap-4">
            {options.map((option, index) => (
              <button
                key={option}
                onClick={() => setSelected(option)}
                className={`touch-target border-2 px-6 py-5 text-left font-display text-3xl uppercase transition ${
                  selected === option
                    ? 'border-white bg-lime text-night shadow-neon'
                    : 'border-lime/70 bg-night/80 text-white hover:bg-lime/10'
                }`}
              >
                <span className="mr-4 text-lime">{String.fromCharCode(65 + index)}.</span>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <NeonButton onClick={() => onAnswer(question.type === 'writing' ? writingValue : selected)} disabled={!selected && !writingValue}>
          Confirmar destino
        </NeonButton>
      </div>
    </motion.section>
  )
}
