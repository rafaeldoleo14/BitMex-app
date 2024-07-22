import { useEffect, useState } from "react";
import { OrderBook } from "../interfaces/orderBook.interface";

export const useWebSocket = () => {
  const [orderBook, setOrderBook] = useState<OrderBook[]>([]);

  const getWebsocketData = () => {
    const ws = new WebSocket(
      "wss://ws.bitmex.com/realtime?subscribe=instrument,orderBookL2_25:XBTUSD"
    );

    ws.onopen = () => {
      console.log("Connected to WebSocket");
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (
        data &&
        data.table === "orderBookL2_25" &&
        data.action === "partial"
      ) {
        // Reemplazar el estado con los datos iniciales recibidos
        setOrderBook(data.data);
      } else if (
        data &&
        data.table === "orderBookL2_25" &&
        data.action === "update"
      ) {
        // Actualizar el estado con los datos nuevos
        setOrderBook((prevData) => {
          const updatedData = [...prevData];
          data.data.forEach((update: OrderBook) => {
            const index = updatedData.findIndex(
              (order) => order.id === update.id
            );
            if (index !== -1) {
              updatedData[index] = { ...updatedData[index], ...update };
            } else {
              updatedData.push(update);
            }
          });
          // Ordenar los datos por timestamp o ID
          updatedData.sort((a, b) => b.id - a.id); // Ordenar por ID descendente
          // Limitar a los primeros 5 elementos
          return updatedData.slice(0, 6);
        });
      }
    };
    ws.onclose = () => {
      console.log("Disconnected from WebSocket");
    };
    return () => {
      ws.close();
    };
  };

  useEffect(() => {
    getWebsocketData();
  }, []);

  return {
    orderBook,
  };
};
