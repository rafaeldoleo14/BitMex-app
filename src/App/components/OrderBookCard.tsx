import { OrderBook } from "../interfaces/orderBook.interface";

export const OrderBookCard = ({ symbol, size, side, timestamp }: OrderBook) => {
  return (
    <div
      className="animate__animated animate__headShake"
      style={{
        backgroundColor: "white",
        width: "200px",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#54c4d0",
          width: "150px",
          height: "60px",
          position: "relative",
          top: "-20px",
        }}
      >
        <p>{symbol}</p>
      </div>

      <h2>$ {size}</h2>

      <p
        style={{
          fontSize: "10px",
          color: "grey",
          textAlign: "center",
          width: "120px",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem illo
        tenetur.
      </p>

      <button
        style={{
          outline: "none",
          border: "none",
          backgroundColor: side === "Sell" ? "#dc3545" : "#1a8754",
          padding: "10px 40px",
          color: "white",
        }}
      >
        {side}
      </button>

      <p
        style={{
          fontSize: "8px",
          color: "grey",
          textAlign: "center",
          width: "120px",
        }}
      >
        Date: {timestamp.toString()}
      </p>
    </div>
  );
};
