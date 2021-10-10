import React, {useMemo} from "react";
import articles from "../dummydata/articles.js";
import { PracticeFilter } from "./PracticeFilter.js";
import { useTable, useSortBy, usePagination, useGlobalFilter, useFilters } from 'react-table';
import { RangeFilter } from "./RangeFilter.js";
import { Checkbox } from './checkbox';

const Table = ({columns, data}) => {

const defaultColumn = useMemo(() => {
  return {
    Filter: RangeFilter,
  }
}, [])

const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setSortBy,
    allColumns,
    getToggleHideAllColumnsProps,
    setGlobalFilter,
    state: { pageIndex, pageSize },
    state,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      autoResetFilters: false,
      initialState: { 
        pageIndex: 0,
        hiddenColumns:["practice"],
        globalFilter:["TDD"]
      },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  const { globalFilter } = state;

  const sortBy = [{ id: "title" }, { id: "authors" }, { id: "source" }, { id: "pubyear" }, { id: "doi" }, { id: "claim" }, { id: "evidence" }];

  // Render Data Table UI
  return (
    <>
      <h2 align="center">SE Practice Evidence</h2>
      <h4 align='center'>Select an SE Practice to show evidence for:</h4>
      <PracticeFilter filter = {globalFilter} setFilter = { setGlobalFilter }/>
      <div>
      <h4 align='Left'>Toggle columns:</h4>
        <div>
            <Checkbox {...getToggleHideAllColumnsProps()} />Toggle
            All
        </div>
        {
          allColumns.map(column => (
            <div key = {column.id}>
            {column.Header !== 'Practice' &&
              <label>
                <input type = 'checkbox' {...column.getToggleHiddenProps()}/>
                {column.Header}
              </label>
            }
            </div>
          ))
      }
      <br/>
    </div>
      <table {...getTableProps()}>
      <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th
                  {...column.getHeaderProps()}
                  onClick={() => {
                    //set sort desc, aesc or none?
                    const desc =
                      column.isSortedDesc === true
                        ? undefined
                        : column.isSortedDesc === false
                        ? true
                        : false;
                    setSortBy([{ id: column.id, desc }, ...sortBy]);
                  }}
                >
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                  <div>
                    {column.canFilter ? column.render('Filter') : null}
                  </div>
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>  

     {/* Pagination */}
     <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
          {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[3, 7, 15].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>

  )
};

  
  export default Table;
