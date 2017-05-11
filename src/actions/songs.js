import papaparse from 'papaparse';

import csvData from '../../public/songgrid.csv';

const getSongsList = () => (dispatch) => {
  papaparse.parse(csvData, {
    download: true,
    error: function(err, file, inputElem, reason) {
      console.log(err, file, inputElem, reason);
    },
    complete: function(parsed) {
      const tempData = [];
      parsed.data.map((d,i) => (
        tempData.push({
          _id: i,
          title: d[0],
          keywords: d[1],
          emotion: d[2],
          writer: d[3],
          source: d[4],
          year: d[5],
          idealKeys: d[6],
          tempo: d[7],
          time: d[8],
          range: d[9],
          structure: d[10],
          style: d[11],
          difficulty: d[12],
          addressedTo: d[13],
          iWe: d[14],
          driver: d[15],
        })
      ));
      dispatch({
        type: 'GET_SONGS_LIST',
        data: tempData,
      });
    }
  });
}

export default getSongsList;
