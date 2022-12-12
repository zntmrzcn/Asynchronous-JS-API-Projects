                                                //Prototype, Ajax, Callback

const word = document.getElementById("word");
const fromLang = document.getElementById("from-language");
const toLang = document.getElementById("to-language");

eventListeners();

function eventListeners(){
    //form
    document.getElementById("translate-form").addEventListener("submit",translateWord);

    //select list - change
    toLang.onchange = function(){
        //arayüz işlem
        ui.changeUI();
    }
}



const translate = new Translate(word.value, fromLang.value, toLang.value);
const ui = new UI();



function translateWord(e){

    translate.changeParameters(word.value, fromLang.value, toLang.value);
    translate.translateWord(function(err,text){
        if(err === null){
            ui.displayTranslate(text);
        }
        else{
            console.log(err);
        }
    });

    e.preventDefault();
}


