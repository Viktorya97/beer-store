export function generateToken() {
  return [...Array(5)].map(() => (Math.random() * 1000000).toString(36).replace('.', '')).join('')
}
