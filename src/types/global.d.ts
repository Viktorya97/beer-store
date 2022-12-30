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
}
