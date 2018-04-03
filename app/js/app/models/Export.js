class Export  {

  constructor (){
    this.formats = {
      header : [
        'email,nome,ip,tipo,data_hora',
        'email,persona,pergunta,resposta,pergunta,resposta,pergunta,resposta',
        'email,name'
      ],
      body : ['', '', ''],
      name : [
        'leads.csv',
        'pesquisa.csv',
        'emails.csv'
      ]
    };

  }
  toCSV (format, data){
    let CSVData = Object.entries(data).reduce((value, entry) =>
      `${value}\r\n${this._format(format, 'body', entry[1])}`,
      this._format(format, 'header', data)
    );
    return `data:text/csv;charset=UTF-8,${encodeURI(CSVData)}`;
  }

  _format(format, dataID, data){
    this.formats.body = [
      `${data._email},${data._name},${data._ip},${parseInt(data._persona)===1?'B2C':'B2B'},${this._dateFormat(data._currentdate)}`,
      `${data._email},${data._ip},${parseInt(data._persona)===1?'CONTRATADO':'CONTRATANTE'},Você já teve problemas em algum processo seletivo? E em relação a análise de competências técnicas na área de Marketing?,${data._questionFirst},Como você lidou ou está lidando com isso?,${data._questionSecond},Qual seria a solução ideal para resolver isso?,${data._questionThird}`,
      `${data._email},${data._name}`
    ];
  	return this.formats[dataID][format];
  }

  _dateFormat (dateString){

  	if (typeof dateString !== "string")
  		return dateString;

  	return dateString.replace(/(\d{2})\/(\d{2})\/(\d{4})(.*)/g, (str, d, m, Y, hour) => {
  		return `${Y}-${m}-${d}${hour}`;
  	});

  }

}
