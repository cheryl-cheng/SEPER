import { ColumnFilter } from './ColumnFilter'

const tablecolumns = [
    {
      Header: 'Title',
      accessor: 'title',
      Filter: ColumnFilter
    },{
      Header: 'Practice',
      accessor: 'practice',
      Filter: ColumnFilter
    },{
      Header: 'Authors',
      accessor: 'authors'
    },{
      Header: 'Source',
      accessor: 'source',
      Filter: ColumnFilter
    },{
      Header: 'Pub. Year',
      accessor: 'pubyear',
      Filter: ColumnFilter
    },{
      Header: 'DOI',
      accessor: 'doi',
      Filter: ColumnFilter
    },{
      Header: 'Claimed Benefit',
      accessor: 'claim',
      Filter: ColumnFilter
    },{
      Header: 'Level of Evidence',
      accessor: 'evidence',
      Filter: ColumnFilter
    }
  ]

  export default tablecolumns;
  //module.exports = tablecolumns