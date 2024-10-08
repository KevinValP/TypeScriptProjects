export interface IAvenger {
  readonly name: string;
  powerScore: number;
  wonBattles: number;
  age: number;
  battle: (enemy: IAvenger, win: boolean) => void;
}
