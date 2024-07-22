// src/interfaces/orderBook.interface.ts
export interface OrderBook {
  symbol: string;
  id: number;
  side: "Buy" | "Sell";
  size: number;
  price: number;
  timestamp: Date;
  // Añade otras propiedades relevantes según la estructura de tus datos
}
