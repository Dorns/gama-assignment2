//FORM CONSTRUCTOR AND METHODS
class Form {
    
    constructor(persona, name, email, leadsFirst, leadsSecond, leadsThird, ip, currentDate) {

        this._persona = persona;
        this._name = name;
        this._email = email;
        this._leadsFirst = leadsFirst;
        this._leadsSecond = leadsSecond;
        this._leadsThird = leadsThird;
        this._ip = ip;
        this._currentdate = currentDate;
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
        return this._leadsFirst;
    }

    get leadsSecond() {
        return this._leadsSecond;
    }

    get leadsThird () {
        return this._leadsSecond;
    }
    
    get ip () {
        return this._ip;
    }

    get currentdate () {
        return this._currentdate;
    }
}