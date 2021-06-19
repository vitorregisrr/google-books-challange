import { createContext } from 'react'

const userContext = createContext({
  user: {
    fullName: `Mehmed Al Fatih`,
    activiteData: {
      currentReading: {
        id: 'Cy86CQAAQBAJ'
      },
      discoverBooks: [{ id: 'dsz5AwAAQBAJ' }, { id: '94ScMQEACAAJ' }]
    }
  }
})

export { userContext }
