class TableCtrl {

  constructor (){

    this._data = {};
    this._table = document.querySelector("#results");
    this._link = document.querySelector("#export");

    this._view = new TableView(this._table);
    this._export = new Export();


    this._db = new Database('https://xpgama12.firebaseio.com/', 'news', {
      onAppend: data => {
        this.append(data.key, data.val());
        this._view.update(this._data);
        this._setupLink(this._link);
      },
      onChange: ref => {
        this._data[ref.key] = ref.val();
        this._view.update(this._data);
        this._setupLink(this._link);
      },
      onRemove: ref => {
        if(typeof this._data[ref.key] !== 'undefined'){
          delete this._data[ref.key];
        }
        this._view.update(this._data);
        this._setupLink(this._link);
      }
    });

  }

  append (key, data){
      this._data[key] = data;
  }

  _setupLink (link){
    link.href = this._export.toCSV(this._data);
  }

}
