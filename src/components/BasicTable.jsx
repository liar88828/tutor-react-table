import {
	useTable,
	useGlobalFilter,
	useFilters, usePagination
} from "react-table";
import {
	COLUMNS,
//	GROUPED_COLUMNS
} from "./columns";
import MOCK_DATA from "./MOCK_DATA.json"
import {useMemo} from "react";
import './table.css'
import {GlobalFiltering} from "./GlobalFiltering.jsx";
import {ColumnFiltering} from "./ColumnFiltering.jsx";

export const BasicTable = () => {
	// const columns = useMemo(() => GROUPED_COLUMNS, []);
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);
	const defaultColumn = useMemo(() => {
		return {
			Filter: ColumnFiltering
		}
	}, []);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		footerGroups,
		nextPage,
		previousPage,
		prepareRow,
		canPreviousPage,
		canNextPage,
		gotoPage,
		pageCount,
		// rows,
		page,
		state,
		setPageSize,
		setGlobalFilter,
		pageOptions,
	} = useTable(
			{
				columns: columns, data,
				defaultColumn, initialState: {pageIndex: 2}
			},
			// useSortBy,
			useGlobalFilter,
			useFilters,
			usePagination
	)

	const {globalFilter, pageIndex, pageSize} = state

	return (
			<>
				<GlobalFiltering filter={globalFilter} setFilter={setGlobalFilter}/>
				<table {...getTableProps()}>
					<thead>
					{headerGroups.map(headerGroup => {
						return (
								<tr{...headerGroup.getHeaderGroupProps()}>
									{headerGroup.headers.map(column => (
											<th{...column.getHeaderProps(
													// column.getSortByToggleProps()
											)}                            >
												<div> {column.canFilter ? column.render('Filter') : null}</div>
												{column.render('Header')}
												<span>
												{/*{column.isSorted ? (column.isSortedDesc ? '-' : '+') : ''}*/}
											</span>
											</th>
									))}
								</tr>
						)
					})}
					</thead>
					<tbody {...getTableBodyProps()}>
					{page.map(row => {
						prepareRow(row)
						return (
								<tr {...row.getRowProps()} key={row.id}>
									{row.cells.map(cell => {
										return <td {...cell.getCellProps()} // key={ cell.row.original.id  }
										>
											{cell.render('Cell')}
										</td>
									})}
								</tr>
						)
					})}
					</tbody>
					<tfoot>
					{
						footerGroups.map(footerGroup => (
								<tr> {footerGroup.headers.map(column => (
										<td {...column.getFooterProps}>
											{column.render('Footer')}
										</td>
								))}
								</tr>
						))}
					</tfoot>
				</table>
				<div>
					<span>
						page {' '}
						<strong>
							{pageIndex + 1} of {pageOptions.length}
						</strong>

					</span>
					<span>
						Goto to Page : {' '}
						<input type="number"
						       value={pageIndex + 1}
						       defaultValue={pageIndex + 1}
						       onChange={e => {
							       // const pageNumber =     e.target.value ? Number(e.target.value) - 1 : 0
							       // gotoPage( pageNumber)
							       gotoPage(e.target.value ? Number(e.target.value) - 1 : 0)
						       }}
						/>
					</span>
					<select value={pageSize}
					        onChange={e => setPageSize(Number(e.target.value))}>
						{[10, 25, 50].map((item) => (
								<option key={item} value={item}>
									Show {item}
								</option>
						))}
					</select>
					<button onClick={() => gotoPage(0)}
					        disabled={!canPreviousPage}>{'<<'}
					</button>
					<button onClick={() => previousPage()}
					        disabled={!canPreviousPage}>Previous
					</button>

					<button onClick={() => nextPage()}
					        disabled={!canNextPage}>Next
					</button>
					<button onClick={() => gotoPage(pageCount - 1)}
					        disabled={!canNextPage}>{'>>'}
					</button>
				</div>
			</>
	);
}