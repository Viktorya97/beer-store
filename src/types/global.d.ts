import { ReactElement } from 'react'

export {}
declare global {
  interface BeerItem {
    abv: number
    attenuation_level: number
    boil_volume: object
    brewers_tips: string
    contributed_by: string
    description: string
    ebc: number
    first_brewed: string
    food_pairing: []
    ibu: number
    id: number
    image_url: string
    ingredients: object
    method: object
    name: string
    ph: number
    srm: number
    tagline: string
    target_fg: number
    target_og: number
    volume: object
  }

  interface CartItem {
    id: number
    image: string
    name: string
    quantity: number
  }

  interface Routes {
    id: number
    path: string
    element: ReactElement
  }

  interface SimilarBeersParams {
    abv_gt: number
    abv_lt: number
    ibu_gt: number
    ibu_lt: number
    id: number
    data: BeerItem[]
  }

  interface AllBeersParams {
    page: number
    per_page: number
  }

  interface BeersByBrewedParams {
    brewed_before: Date | string
    brewed_after: Date | string
  }

  interface SingleBeerParams {
    id: number
  }
}
