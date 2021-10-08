const tablecolumns = [
    {
      Header: 'SEPER',
      columns: [
        {
          Header: 'Title',
          accessor: 'title',
        },
        {
          Header: 'Practice',
          accessor: 'practice',
        },
      ], 
    },
    {
      Header: 'Year Filter',
      columns: [
        {
          Header: 'Authors',
          accessor: 'authors',
        },
        {
          Header: 'Source',
          accessor: 'source',
        },
        {
          Header: 'Pub. Year',
          accessor: 'pubyear',
        },
      ],
    },
    {
      Header: 'Practice Filter',
      columns: [
        {
          Header: 'DOI',
          accessor: 'doi',
        },
        {
          Header: 'Claimed Benefit',
          accessor: 'claim',
        },
        {
          Header: 'Level of Evidence',
          accessor: 'evidence',
        },
      ],
    },
    
  ]

  export default tablecolumns;