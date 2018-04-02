class Export  {

  toCSV (data){
  	if(data.length < 1)
  		return 'javascript:void(0);';
    let CSVData = Object.entries(data).reduce((value, entry) =>
      `${value}\r\n${entry[1]._currentdate},${entry[1]._ip},${entry[1]._persona===1?'B2C':'B2B'},${entry[1]._name},${entry[1]._email}`,
      'date,ip,persona,name,email'
    );
    return `data:text/csv;charset=utf-8,${encodeURIComponent(CSVData)}`;
  }
}