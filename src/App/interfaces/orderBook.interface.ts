export interface OrderBook {
  symbol: string;
  id: number;
  side: "Buy" | "Sell";
  size: number;
  price: number;
  timestamp: Date;
}
