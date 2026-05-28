const STORAGE_KEY = 'vuelan-recibidos-games'

export function getGames() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  } catch {
    return []
  }
}

export function saveGame(game) {
  const games = getGames()
  const nextGames = [game, ...games]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextGames))
  return nextGames
}

export function clearGames() {
  localStorage.removeItem(STORAGE_KEY)
}

export function getFacultyRanking(games = getGames()) {
  const ranking = games.reduce((acc, game) => {
    const faculty = game.faculty || 'Otra'
    if (!acc[faculty]) {
      acc[faculty] = { faculty, points: 0, players: 0, correct: 0 }
    }
    acc[faculty].points += game.score
    acc[faculty].players += 1
    acc[faculty].correct += game.correct
    return acc
  }, {})

  return Object.values(ranking).sort((a, b) => b.points - a.points)
}

export function getIndividualRanking(games = getGames()) {
  return [...games].sort((a, b) => b.score - a.score).slice(0, 12)
}
