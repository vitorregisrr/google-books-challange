export const text = {
  transition: { delay: 0.1, duration: 1 },
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
}

export const img = {
  transition: { delay: 0.1, duration: 1 },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}
export const card = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const shape1 = {
  transition: { delay: 0.5, duration: 0.8 },
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 }
}

export const shape2 = {
  transition: { delay: 0.3, duration: 1 },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const shape3 = {
  transition: { delay: 0.2, duration: 0.7 },
  initial: { opacity: 0, rotate: '40deg' },
  animate: { opacity: 1, rotate: 0 },
  exit: { opacity: 0, rotate: '40deg' }
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
