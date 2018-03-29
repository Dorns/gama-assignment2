//FORM CONSTRUCTOR AND METHODS
class Form {
    
    constructor(status, name, email, company, leadsFirst, leadsSecond, leadsThird, ip, currentDate) {

        this._status = status;
        this._name = name;
        this._email = email;
        this._company = company;
        this._leadsFirst = leadsFirst;
        this._leadsSecond = leadsSecond;
        this._leadsThird = leadsThird;
        this._ip = ip;
        this._currentdate = currentDate;
        Object.freeze(this);
    }

    get status() {
        return this._status;
    }

    get name() {
        
        return this._name;
    }
    
    get email() {
        
        return this._email;
    }
    
    get company() {
        
        return this._company;
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