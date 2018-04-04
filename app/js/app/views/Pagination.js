class Pagination extends Views {

  constructor (element){
    super(element);
  }

  update(ini = 0, end = 10) {
      this._elemento.innerHTML = this.template(...arguments);
  }

  template (ini, end){
    let tmp = '<ul class="pagination">';
    for(let i = ini; i<=end; i++)
      tmp += `<li class="page-item"><a href="javascript:void(0);" data-page="${i}" class="page-link">${i}</a></li>`
    return tmp += '</ul>';
  }

}
