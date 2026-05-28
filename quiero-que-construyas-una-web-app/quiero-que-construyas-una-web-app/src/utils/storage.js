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
