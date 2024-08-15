export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'

export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// Diferencia entre type e interface:
// Las interfaces pueden extenderse y declararse multiples veces,
// mientras que los types no pueden extenderse y solo pueden declararse una vez.

// export interface specialDiaryEntry extends DiaryEntry {
//    image?: string;
// }

// Entonces el contrato de la segunda interfaz quedaria asi:

// export interface specialDiaryEntry extends DiaryEntry {
//     id: number;
//     date: string;
//     weather: Weather;
//     visibility: Visibility;
//     comment: string;
//     image?: string;
// }
