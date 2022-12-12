//Prototype yöntemi kullanacağımız için consturctorlarımızı oluşturuyoruz. 

//CONSTRUCTOR
function Translate(word,fromLang,toLang){

    this.word = word;
    this.fromLang = fromLang;
    this.toLang = toLang;

    //XHR objesi
    this.xhr = new XMLHttpRequest();
}


//AJAX İŞLEMLERİ 
Translate.prototype.translateWord = function(callback){

    //Ajax işlemleri
    const endpoint = `https://api.mymemory.translated.net/get?q=${this.word}&langpair=${this.fromLang}|${this.toLang}`;
    this.xhr.open("GET",endpoint);
    this.xhr.onload = function(){
        if(this.status === 200 ){
            const json = JSON.parse(this.responseText);
            const text = json.responseData.translatedText;
            callback(null,text);
        }
        else{
            callback("Hata Oluştu.",null);
        }
    }
    this.xhr.send();
}

//Güncellenen parametrelerin constructor üzerinde güncellenmesi
Translate.prototype.changeParameters = function(newWord, newFromLang, newToLang){
    this.word = newWord;
    this.fromLang = newFromLang;
    this.toLang = newToLang;
}