class FormController {

    constructor() {

        //FORM MAKER
        let $ = document.querySelector.bind(document);
        this._inputPersona = $('#persona');
        this._inputName = $('#name');
        this._inputEmail = $('#email');
        this._inputLeadsFirst = $('#leadsFirst');
        this._inputLeadsSecond = $('#leadsSecond');
        this._inputLeadsThird = $('#leadsThird');
        this._ip = $('#ip');
        this._currentDate = new Date().toLocaleString();
        this._formList = new FormList();
        //MESSAGE MAKER
        this._mensagem = new Message();
        this._successView = new SuccessView($('#successView'));
        this._successView.update(this._mensagem);

    }

    add(event) {

        //ADD FORM
        event.preventDefault();
        this._formList.add(this._createForm());
        //ADD MESSAGE
        this._mensagem.texto = 'Cadastro Efetuado com Sucesso';
        this._successView.update(this._mensagem);
        this._clearForm();

    }

    _createForm() {

        //CREATE FORM
        return new Form(
            this._inputPersona.value,
            this._inputName.value,
            this._inputEmail.value,
            this._inputLeadsFirst.value,
            this._inputLeadsSecond.value,
            this._inputLeadsThird.value,
            this._ip.value,
            this._currentDate,
        );
    }

    _clearForm() {

        //CLEAR FORM
        this._inputPersona.value = '';
        this._inputName.value = '';
        this._inputEmail.value = '';
        this._inputLeadsFirst.value = '';
        this._inputLeadsSecond.value = '';
        this._inputLeadsThird.value = '';
        this._ip.value = '';
        this._inputStatus.focus();
    }

}