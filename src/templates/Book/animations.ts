export const wrapper = {
  style: { width: '100%', height: '100vh' },
  transition: { delay: 0, duration: 0.7, ease: 'easeIn' },
  initial: {
    backgroundColor: '#fefaf6',
    opacity: 0.3
  },
  animate: {
    backgroundColor: '#fefaf6',
    opacity: 1
  },
  exit: {
    backgroundColor: '#fefaf6',
    opacity: 0.1
  }
}

export const header = {
  transition: { delay: 0.1, duration: 0.8 },
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 }
}

export const img = {
  transition: { delay: 0.2, duration: 0.8 },
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export const desc = {
  transition: { delay: 0.1, duration: 0.6 },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}
