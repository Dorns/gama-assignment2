class Export  {

  toCSV (data){
    console.log(data)
    let CSVData = Object.entries(data).reduce((value, entry) =>
      `${value}\n${entry[1]._currentdate};${entry[1]._ip};${entry[1]._persona};${entry[1]._name};${entry[1]._email}`,
      'date;ip;persona;name;email'
    );
    return `data:text/csv;charset=utf-8,${encodeURIComponent(CSVData)}`;
  }

}
