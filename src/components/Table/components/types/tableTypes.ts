interface IHistoryEntry {
  date: string;
  customerId: string;
  amount: number;
}

export interface IRow {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  price: number;
  history: IHistoryEntry[];
}
