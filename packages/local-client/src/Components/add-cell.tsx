import "./add-cell.css";
import { useActions } from "../hooks/useActions";

interface AddCellProps {
  prevCellId: string | null;
  forceVisable?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ prevCellId, forceVisable }) => {
  const { insertCellAfter } = useActions();

  return (
    <div className={`add-cell ${forceVisable && "force-visible"}`}>
      <div className="add-buttons">
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellAfter(prevCellId, "code")}
        >
          <span className="icon is-small">
            <i className="fas fa-plus"></i>
          </span>
          <span>Code</span>
        </button>
        <button
          onClick={() => insertCellAfter(prevCellId, "text")}
          className="button is-rounded is-primary is-small"
        >
          <span className="icon is-small">
            <i className="fas fa-plus"></i>
          </span>
          <span>Text</span>
        </button>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default AddCell;
