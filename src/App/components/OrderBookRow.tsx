import { FallingLines } from "react-loader-spinner";
import { useWebSocket } from "../hooks/useWebSocket";
import { OrderBookCard } from "./OrderBookCard";
import { FilterButtons } from "./FilterButton";
import { OrderBook } from "../interfaces/orderBook.interface";
import { filterButtons } from "../helpers/getFilterButtonsData";
import { useState } from "react";

export const OrderBookRow = () => {
  const { orderBook } = useWebSocket();

  const [actionButton, setActionButton] = useState("All");

  const filterByStatus = (action: string): OrderBook[] => {
    if (action === "All") return orderBook;

    return orderBook.filter((item) => item.side === action);
  };

  const onChangeAction = (action: string): void => {
    setActionButton(action);
  };

  return (
    <>
      <div style={{ display: "flex", gap: 0 }}>
        {filterButtons.map((button) => (
          <FilterButtons
            key={button.id}
            id={button.id}
            text={button.text}
            action={button.action}
            onChangeAction={onChangeAction}
            actionButton={actionButton}
          />
        ))}
      </div>

      {orderBook.length === 6 ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "5em",
            justifyContent: "center",
          }}
        >
          {filterByStatus(actionButton).map((item) => (
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
