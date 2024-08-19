export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}

export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor'
}

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// Utility types, crear tipos a partir de otros tipos

// Pick: tomar los campos que queremos de un tipo
// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

// Omit: tomar todos los campos menos los que queremos
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

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

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
