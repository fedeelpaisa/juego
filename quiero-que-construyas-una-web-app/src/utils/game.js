export function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5)
}

export function pickQuestions(questions, amount = 5) {
  return shuffle(questions).slice(0, amount)
}

export function normalizeAnswer(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

export function isCorrectAnswer(question, selected) {
  if (!selected) return false
  const normalized = normalizeAnswer(selected)
  if (question.type === 'writing') {
    const accepted = question.validAnswers || [question.answer]
    return accepted.some((answer) => normalizeAnswer(answer) === normalized)
  }
  return normalizeAnswer(question.answer) === normalized
}

export function calculatePoints(isCorrect, seconds) {
  if (!isCorrect) return 0
  return seconds < 10 ? 150 : 100
}
