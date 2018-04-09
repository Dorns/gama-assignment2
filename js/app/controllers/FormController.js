class FormController {

    constructor() {

        //FORM MAKER
        let $ = document.querySelector.bind(document);
        this._inputName = $('#name');
        this._inputEmail = $('#email');
        this._inputOcupacao = $('#ocupacao');
        this._inputQuestionFirst = $('#questionFirst');
        this._currentDate = new Date().toLocaleString();
        this._formList = new FormList();
        //CHANGE MAKER
        this._obrigado = $('#obrigado');
        this._hero = $('#hero');
    }

    add(event) {

        //ADD FORM
        event.preventDefault();
        this._formList.add(this._createForm());
        //CHANGE HERO FOR OBRIGADO
        this._obrigado.classList.remove("submit");
        this._hero.classList.remove('hero');
    }

    _createForm() {
        //CREATE FORM
        return new Form(
            this._inputName.value,
            this._inputEmail.value,
            this._inputOcupacao.value,
            this._inputQuestionFirst.value,
            this._currentDate
        );
    }
}
