import React from "react";
import { Table as ReactstrapTable } from "reactstrap";

const Table = ({ columns, rows }) => {
  return (
    <ReactstrapTable bordered>
      <thead>
        <tr>
          {columns && columns.map((column, idx) => <th key={idx}>{column}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows &&
          rows.map(({ name, tasks }, idx) => (
            <tr key={idx}>
              <th scope="row">{idx + 1}</th>
              <td>{name}</td>
              <td>{tasks.length}</td>
            </tr>
          ))}
      </tbody>
    </ReactstrapTable>
  );
};

export default Table;
