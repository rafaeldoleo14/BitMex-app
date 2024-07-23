export interface FilterButton {
  id: number;
  text: string;
  action?: "Buy" | "Sell";
  // onChangeAction?: (action: string) => void;
}
