export type BookType = {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: {
    title: string
    authors: string[]
    publishedDate: string
    description: string
    industryIdentifiers: { type: string; identifier: string }[]
    readingModes: {
      text: boolean
      image: boolean
    }
    pageCount: number
    printType: string
    categories: string[]
    maturityRating: string
    allowAnonLogging: false
    contentVersion: string
    panelizationSummary: {
      containsEpubBubbles: false
      containsImageBubbles: false
    }
    language: 'un'
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
  }
  saleInfo: {
    country: string
    saleability: string
    isEbook: false
  }
  accessInfo: {
    country: string
    viewability: string
    embeddable: false
    publicDomain: false
    textToSpeechPermission: string
    epub: {
      isAvailable: false
    }
    pdf: {
      isAvailable: false
    }
    webReaderLink: string
    accessViewStatus: string
    quoteSharingAllowed: boolean
  }
  searchInfo: {
    textSnippet: string
  }
}
