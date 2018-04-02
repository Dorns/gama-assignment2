//FORM CONSTRUCTOR AND METHODS
class Form {
    
    constructor(persona, name, email, questionFirst, questionSecond, questionThird, ip, currentDate, tipo) {

        this._persona = persona;
        this._name = name;
        this._email = email;
        this._questionFirst = questionFirst;
        this._questionSecond = questionSecond;
        this._questionThird = questionThird;
        this._ip = ip;
        this._currentdate = currentDate;
        this._tipo = '';
        Object.freeze(this);
    }

    get persona() {
        return this._inputPersona;
    }

    get name() {
        
        return this._name;
    }
    
    get email() {
        
        return this._email;
    }

    get leadsFirst() {
        return this._questionFirst;
    }

    get leadsSecond() {
        return this._questionSecond;
    }

    get leadsThird () {
        return this._questionSecond;
    }
    
    get ip () {
        return this._ip;
    }

    get currentdate () {
        return this._currentdate;
    }

    get tipo () {
        return this._tipo;
    }
}