import "./HomePage.css";
import { OrderBookRow } from "../../components/OrderBookRow";
import { Navbar } from "../../components/shared/Navbar";

export const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "3em",
      }}
    >
      <Navbar />

      <h1 style={{ color: "white", padding: "0em 0 0 1.5em" }}>Order Book</h1>

      <OrderBookRow />
    </div>
  );
};
