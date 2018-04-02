class TableCtrl {

  constructor (){

    let $ = document.querySelector.bind(document);

    this._data       = {};
    this._filterData = {};

    this._table         = $("#results");
    this._link          = $("#export");

    this._view   = new TableView(this._table);
    this._export = new Export();

    this._totalRows     = $('#total-rows');
    this._updatedTime   = $('#updated-time');

    this._selectPersona = $('#selectPersona');
    this._selectPersona.addEventListener('change', event => {
      this._filterByPersona(event.target.value)
      this._view.update(this._filterData);
      this._setTotalRows();
    });
    
    this._db = new Database('https://gamaassignment2.firebaseio.com/', 'forms', {
      onAppend: data => {
        this.append(data.key, data.val());
        this._filterByPersona(this.persona);
        this._view.update(this._filterData);
        this._setupLink(this._link);
        this._setTotalRows();
        this._setUpdatedTime();
      },
      onChange: ref => {
        this._data[ref.key] = ref.val();
        this._filterByPersona(this.persona);
        this._view.update(this._filterData);
        this._setupLink(this._link);
        this._setTotalRows();
        this._setUpdatedTime();
      },
      onRemove: ref => {
        if(typeof this._data[ref.key] !== 'undefined'){
          delete this._data[ref.key];
        }
        this._filterByPersona(this.persona);
        this._view.update(this._filterData);
        this._setupLink(this._link);
        this._setTotalRows();
        this._setUpdatedTime();
      }
    });

  }

  append (key, data){
      this._data[key] = data;
  }

  _filterByPersona (persona){
    this._filterData = Object.entries(this._data).reduce((value, entry)=>{
      if(entry[1]._persona == persona) value[entry[0]] = entry[1];
      return value;
    }, {});
    console.log(this._filterData)
  }

  _setupLink (link){
    link.href = this._data.length < 1 ? 'javascript:void(0);' : this._export.toCSV(this._filterData);
    this._data.length < 1 ? link.removeAttribute('download') : link.download = 'results.csv';
  }

  _setUpdatedTime (){
    let hoy = new Date();
    this._updatedTime.innerHTML = `Atualizado em ${hoy.getDate() < 10? '0': ''}${hoy.getDate()}/${hoy.getMonth() <= 10? '0': ''}${hoy.getMonth() + 1} às ${hoy.getHours()}:${hoy.getMinutes()}`
  }

  _setTotalRows (){
    this._totalRows.innerHTML = `
      ${Object.keys(this._filterData).length} registro(s) filtrado(s) <br>
      Total: ${Object.keys(this._data).length} registro(s)
    `;
  }

  get persona (){
    return this._selectPersona.value;
  }

}
