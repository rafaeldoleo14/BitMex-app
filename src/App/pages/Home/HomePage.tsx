import { useEffect } from "react";
import { OrderBookTable } from "../../components/OrderBookTable";
import { bitMexService } from "../../structure/services/bitMex.service";
import "./HomePage.css";

export const HomePage = () => {
  useEffect(() => {
    const fetchAnnouncements = async () => {
      const data = await bitMexService.getAllAnnouncement();
      if (data) {
        console.log(data);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "3em 0 0 3em",
        gap: "10px",
      }}
    >
      <h1 style={{ color: "white" }}>Order Book</h1>

      <OrderBookTable />
    </div>
  );
};
