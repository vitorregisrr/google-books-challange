export type UserType = {
  user: {
    fullName: string
    activiteData: {
      currentReading: {
        id: string
      }
      discoverBooks: { id: string }[]
    }
  }
}
