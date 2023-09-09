import { range } from "./utils";

function Grid({ numRows, numCols }) {
const rows = range(numRows);
const cols = range(numCols)

  return (
    <div className="grid">
      {rows.map((row) => (
        <div key={row} className="grid-row">
          {cols.map((col) => (
            <div key={col} className="grid-cell">
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
