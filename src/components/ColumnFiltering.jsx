export const ColumnFiltering = ({column}) => {
	const {filterValue, setFilter} = column
	return (
			<div>
				Search : {''}
				<input type="text" value={filterValue || ''}
				       onChange={e => setFilter(e.target.value)}/>
			</div>
	);
}