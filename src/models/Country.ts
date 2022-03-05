export interface Country {
  borders: string[]
  currencies: { [key: string]: any }
  languages: { [key: string]: any }
  name: string
  nativeName: string
  population: number
  region: string
  subregion: string
  capital: string[]
  topLevelDomain: string[]
  flag: string
}
