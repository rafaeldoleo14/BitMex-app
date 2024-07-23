import "./HomePage.css";
import { OrderBookRow } from "../../components/OrderBookRow";
import { Navbar } from "../../components/shared/Navbar";

export const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2em",
      }}
    >
      <Navbar />

      <div
        style={{
          padding: "0em 3em 0 3em",
        }}
      >
        <h1 style={{ color: "white" }}>Order Book</h1>
      </div>

      <OrderBookRow />
    </div>
  );
};
