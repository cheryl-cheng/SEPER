import { SortFilter } from "./SortFilter";

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
          show: false,
          filterable: true,
          filterMethod: (filter, row) => {
            if (filter.value === "all") {
              return true;
            }
            if (filter.value === "TDD") {
              return row[filter.id] === "TDD";
            }
            if (filter.value === "Mob Programming") {
              return row[filter.id] === "Mob Programming";
            }
          },
          Filter: SortFilter
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