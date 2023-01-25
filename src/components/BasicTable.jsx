import {useTable, useSortBy} from "react-table";
import {
	COLUMNS,
//	GROUPED_COLUMNS
} from "./columns";
import MOCK_DATA from "./MOCK_DATA.json"
import {useMemo} from "react";
import './table.css'

export const BasicTable = () => {
	// const columns = useMemo(() => GROUPED_COLUMNS, []);
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);
	const tableInstance = useTable({columns: columns, data}, useSortBy)

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		footerGroups,
		rows,
		prepareRow
	} = tableInstance

	return (
			<table {...getTableProps()}>
				<thead>
				{headerGroups.map(headerGroup => {
					return (
							<tr{...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map(column => (
										<th{...column.getHeaderProps(column.getSortByToggleProps())}
												key={column.render('id')}	>

											{column.render('Header')}
											<span>
												{column.isSorted ? (column.isSortedDesc ? '-' : '+') : ''}
											</span>
										</th>
								))}
							</tr>
					)
				})}
				</thead>

				<tbody {...getTableBodyProps()}>
				{rows.map(row => {
					prepareRow(row)
					return (
							<tr {...row.getRowProps()}
							    key={row.id}>
								{row.cells.map(cell => {
									return <td {...cell.getCellProps()}
									// key={ cell.row.original.id  }
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
							<tr> {...footerGroup.headers.map(column => (
									<td {...column.getFooterProps}>
										{column.render('Footer')}
									</td>
							))}
							</tr>
					))}
				</tfoot>
			</table>
	);
}