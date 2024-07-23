import { FilterButton } from "../interfaces/filterButton.interface";

interface FilterButtonsProps extends FilterButton {
  onChangeAction: (action: string) => void;
  actionButton: string;
}

export const FilterButtons: React.FC<FilterButtonsProps> = ({
  text,
  action,
  onChangeAction,
  actionButton,
}) => {
  return (
    <button
      onClick={() => onChangeAction(text)}
      style={{
        width: "90px",
        outline: "none",
        marginBottom: "20px",
        marginLeft: `${text === "All" ? "3em" : "10px"}`,
        padding: "5px 0",
        backgroundColor: `${
          actionButton === "Buy" && text === "Buy"
            ? "#1a8754"
            : actionButton === "Sell" && text === "Sell"
            ? "#dc3545"
            : actionButton === "All" && text === "All"
            ? "grey"
            : "transparent"
        }`,
        border: `1px solid ${
          action === "Buy" ? "#1a8754" : action === "Sell" ? "#dc3545" : "grey"
        }`,
        color: "white",
        borderRadius: "10px",
      }}
    >
      {text}
    </button>
  );
};
