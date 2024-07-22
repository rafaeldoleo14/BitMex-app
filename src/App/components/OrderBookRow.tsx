import { FallingLines } from "react-loader-spinner";
import { useWebSocket } from "../hooks/useWebSocket";
import { OrderBookCard } from "./OrderBookCard";

export const OrderBookRow = () => {
  const { orderBook } = useWebSocket();

  return (
    <>
      {orderBook.length === 6 ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "5em",
            justifyContent: "center",
          }}
        >
          {orderBook.map((item) => (
            <OrderBookCard key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <div style={{ paddingLeft: "3.5em" }}>
          <FallingLines height="80" width="80" color="white" />
        </div>
      )}
    </>
  );
};
