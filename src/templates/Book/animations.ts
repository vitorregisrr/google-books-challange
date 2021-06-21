export const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const scale = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 }
}

export const circle = {
  style: { width: '100%', height: '100vh' },
  transition: { duration: 0.7, ease: 'easeIn' },
  initial: {
    backgroundColor: '#FF6978',
    opacity: 0.3,
    clipPath: 'circle(0% at 50% 8%)'
  },
  animate: {
    backgroundColor: '#fefaf6',
    opacity: 1,
    clipPath: 'circle(100% at 50% 50%)'
  },
  exit: {
    backgroundColor: '#FF6978',
    opacity: 0.1,
    clipPath: 'circle(0% at 50% 8%)'
  }
}
