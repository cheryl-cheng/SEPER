import { ColumnFilter } from './ColumnFilter'

const tablecolumns = [
    {
      Header: 'Title',
      accessor: 'title',
      Filter: ColumnFilter,
      disableFilters: true
    },{
      Header: 'Practice',
      accessor: 'practice',
      Filter: ColumnFilter
    },{
      Header: 'Authors',
      accessor: 'authors',
      Filter: ColumnFilter,
      disableFilters: true
    },{
      Header: 'Source',
      accessor: 'source',
      Filter: ColumnFilter,
      disableFilters: true
    },{
      Header: 'Pub. Year',
      accessor: 'pubyear',
      Filter: ColumnFilter,
    },{
      Header: 'DOI',
      accessor: 'doi',
      Filter: ColumnFilter,
      disableFilters: true
    },{
      Header: 'Claimed Benefit',
      accessor: 'claim',
      Filter: ColumnFilter,
      disableFilters: true
    },{
      Header: 'Level of Evidence',
      accessor: 'evidence',
      Filter: ColumnFilter,
      disableFilters: true
    }
  ]

  export default tablecolumns;
  //module.exports = tablecolumns