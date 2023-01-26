import {format} from "date-fns";
// import {ColumnFiltering as filter} from './ColumnFiltering'

export const COLUMNS = [
	{
		Header: 'Id', Footer: 'Id', accessor: "id",
		disableFilters:true
		// Filter: filter
	},
	{
		Header: 'First Name', Footer: 'First Name', accessor: "first_name",
		// Filter: filter
	},
	{
		Header: 'Last Name', Footer: 'Last Name', accessor: "last_name",
		// Filter: filter
	},
	{
		Header: 'Date of Birth', Footer: 'Date of Birth', accessor: "date_of_birth",
		Cell: ({value}) => {
			return format(new Date(value), 'dd/MM/yyyy')
		}
		// , Filter: filter
	},
	{
		Header: 'Country', Footer: 'Country', accessor: "country",
		// Filter: filter
	},
	{
		Header: 'Phone', Footer: 'Phone', accessor: "phone",
		// Filter: filter
	},
]


export const GROUPED_COLUMNS = [
	{Header: 'Id', Footer: 'Id', accessor: "id"},
	{
		Header: 'First Name', Footer: 'First Name',
		columns: [
			{Header: 'First Name', Footer: 'First Name', accessor: "first_name"},
			{Header: 'Last Name', Footer: 'Last Name', accessor: "last_name"},
		]
	},
	{
		Header: 'Info',
		Footer: 'Info',
		columns: [
			{Header: 'Date of Birth', Footer: 'Date of Birth', accessor: "date_of_birth"},
			{Header: 'Country', Footer: 'Country', accessor: "country"},
			{Header: 'Phone', Footer: 'Phone', accessor: "phone"},]
	}
]