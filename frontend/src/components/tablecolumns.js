import { RangeFilter } from "./RangeFilter";

const tablecolumns = [
  {
    Header: 'Title',
    accessor: 'title',
    disableFilters: true,
  },{
    Header: 'Practice',
    accessor: 'practice',
    disableFilters: true,
  },{
    Header: 'Authors',
    accessor: 'authors',
    disableFilters: true,
  },{
    Header: 'Source',
    accessor: 'source',
    disableFilters: true,
  },{
    Header: 'Pub. Year',
    accessor: 'pubyear',
    Filter: RangeFilter,
    filter: 'between',
  },{
    Header: 'DOI',
    accessor: 'doi',
    disableFilters: true,
  },{
    Header: 'Claimed Benefit',
    accessor: 'claim',
    disableFilters: true,
  },{
    Header: 'Level of Evidence',
    accessor: 'evidence',
    disableFilters: true,
  }
]

  export default tablecolumns;