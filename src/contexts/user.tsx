import { createContext } from 'react'
import { UserType } from 'types/User'

const tempUserState: UserType = {
  user: {
    fullName: `Mehmed Al Fatih`,
    activiteData: {
      currentReading: {
        id: 'Cy86CQAAQBAJ'
      },
      discoverBooks: [
        { id: 'dsz5AwAAQBAJ' },
        { id: '94ScMQEACAAJ' },
        { id: 'k0Z2-I0zrDgC' }
      ]
    }
  }
}

const UserContext = createContext(tempUserState)

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={tempUserState}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext }
