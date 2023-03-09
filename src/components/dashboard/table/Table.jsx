import { useState, useEffect, useMemo } from 'react';
import { useTable } from 'react-table';
import './table.css'

const Table = ({COLUMNS, DATA,width ="830px"}) => {

  // useeffect ...

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DATA, [])
  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    setGlobalFilter,
    prepareRow,
} = useTable({ columns, data });

return (
  <div className="table-container">
      <table {...getTableProps()} style={{ width: width}}>
          <thead>
              {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                          <th {...column.getHeaderProps()}>
                              {column.render('Header')}
                          </th>
                      ))}
                  </tr>
              ))}
          </thead>
          <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                  prepareRow(row);
                  return (
                      <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => {
                              return (
                                  <td {...cell.getCellProps()}>
                                      {cell.render('Cell')}
                                  </td>
                              );
                          })}
                      </tr>
                  );
              })}
          </tbody>
      </table>
  </div>
);
};
export default Table;