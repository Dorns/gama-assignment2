class FormController {

    constructor() {

        //FORM MAKER
        let $ = document.querySelector.bind(document);
        this._inputPersona = $('#persona');
        this._inputName = $('#name');
        this._inputEmail = $('#email');
        this._inputQuestionFirst = $('#questionFirst');
        this._inputQuestionSecond = $('#questionSecond');
        this._inputQuestionThird = $('#questionThird');
        this._ip = $('#ip');
        this._currentDate = new Date().toLocaleString();
        this._formList = new FormList();
        //CHANGE MAKER
        this._obrigado = $('#obrigado')
        this._hero = $('#hero');
        this._tipo = '';

    }

    add(event) {


        try {

            //ADD FORM
            event.preventDefault();
            this._formList.add(this._createForm());
            //CHANGE HERO FOR OBRIGADO
            this._obrigado.classList.remove("submit");
            this._hero.classList.remove('hero');
            
        } catch(e) {
            errCtrl.add({error: e, date: (new Date()).getTime()});
        }

    }

    _createForm() {

        try {

            //CREATE FORM
            return new Form(
                this._inputPersona.value,
                this._inputName.value,
                this._inputEmail.value,
                this._inputQuestionFirst.value,
                this._inputQuestionSecond.value,
                this._inputQuestionThird.value,
                this._ip.value,
                this._currentDate,
                this._tipo,
            );

        } catch (e){
            errCtrl.add({error: {msg: e.message, stackTrace: e.stack}, date: (new Date()).getTime()});
        }
    }

}