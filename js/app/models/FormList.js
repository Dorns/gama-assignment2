//FIREBASE INFO
let firebaseOn = false;
var config = {
    apiKey: "AIzaSyBfc1ZzpeExKyHbXD3ZfcCgeVXg1rBmubg",
    authDomain: "gamaassignment2.firebaseapp.com",
    databaseURL: "https://gamaassignment2.firebaseio.com",
    projectId: "gamaassignment2",
    storageBucket: "gamaassignment2.appspot.com",
    messagingSenderId: "552591821332"
};

class FormList {

    constructor() {

        this._form = [];
    }

    //FORM MAKER
    add(form) {

        try {
            
            if (firebaseOn == false) {
                //FIREBASE START
                firebase.initializeApp(config);
            };
            var database = firebase.database();
            var ref = database.ref('forms');
            firebaseOn = true;

            ref.push(form);

            this._form.push(form);

        } catch(e) {
            errCtrl.add({error: {msg: e.message, stackTrace: e.stack}, date: (new Date()).getTime()});
        }
    }

}