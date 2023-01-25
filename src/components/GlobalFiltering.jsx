export const GlobalFiltering = ({filter, setFilter}) => {

	return (
			<div>
				Search : {''}
				<input type="text" value={filter || ''}
				       onChange={e => setFilter(e.target.value)}/>
		</div>
	);
}