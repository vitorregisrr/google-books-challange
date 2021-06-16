import { createContext } from 'react'

const userContext = createContext({
  user: {
    fullName: `Mehmed Al Fatih`,
    activiteData: {
      currentReading: {
        id: 1
      }
    }
  }
})

export { userContext }
