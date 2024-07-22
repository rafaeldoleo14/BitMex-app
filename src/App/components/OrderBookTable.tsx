import { FallingLines } from "react-loader-spinner";
import { useWebSocket } from "../hooks/useWebSocket";

export const OrderBookTable = () => {
  const { orderBook } = useWebSocket();

  return (
    <div>
      {orderBook.length == 5 ? (
        <table className="table table-dark w-50 table-striped table-hover text-center">
          <thead>
            <tr>
              <th>Type</th>
              <th>Action</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orderBook.length == 5 &&
              orderBook.map((item) => (
                <tr key={item.id}>
                  <th>{item.symbol}</th>
                  <th>{item.side}</th>
                  <th>{item.size}</th>
                  <th>{item.timestamp.toString()}</th>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <FallingLines height="80" width="80" color="white" />
      )}
    </div>
  );
};
