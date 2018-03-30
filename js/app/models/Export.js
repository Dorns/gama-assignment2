class Export  {

  toCSV (data){
    let CSVData = Object.entries(data).reduce((value, entry) =>
      `${value}\n${entry[1].fullname};${entry[1].email}`,
      'fullname;email'
    );
    return `data:text/csv;charset=utf-8,${encodeURIComponent(CSVData)}`;
  }

}
