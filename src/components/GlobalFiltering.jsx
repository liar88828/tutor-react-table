import React, {useState} from "react";
import {useAsyncDebounce} from "react-table";
// import {useAsyncDebounce} from "react-table";

export const GlobalFiltering = ({filter, setFilter}) => {
	const [values, setValue] = useState(filter);
	//
	const onChange = useAsyncDebounce((value) => {
		setFilter(value || undefined);
	}, 1000);

	return (
			<span>
				Search : {' '}
				<input type="text"
				       value={values || ''}
				       onChange={(e) => {
					       setValue(e.target.value)
					       onChange(e.target.value)
				       }}/>			</span>
	);
}