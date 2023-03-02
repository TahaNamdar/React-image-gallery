export interface IDataProvider {
  title: string
  wharf: string
  wharfHeader: string
  wharfDesc: string
  slug: string
  imageHeight: number
  info: string
  learnMoreLink?: string
  homebgimage: string
  backgroundImage: string
  mapImage: string
  sliders: {
    img1: string
    img2?: string
    title: string
    caption: string
    x: number
    y: number
    options?: {
      img: string
      name: string
    }[]
  }[]
  gallery: {
    img ?: string
    original ?:string
    thumbnail?:string
    title: string
    caption: string
    x: number
    y: number
    env?: boolean
    options?: {
      img: string
      name: string
    }[]
  }[]
  faq: {
    title: string
    body: string
  }[]
  about: string
  aboutPoints: string[]
  lift?: boolean
  have_your_say?: string
  feedbackDate?: string
  surveyOpen: boolean
  consultationText?: string
  reportLink?: string
}
