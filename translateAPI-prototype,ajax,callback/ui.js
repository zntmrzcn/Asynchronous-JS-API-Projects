function UI(){
    this.outputImage = document.getElementById("outputImage");
    this.outputWord = document.getElementById("outputWord");
    this.toLang = document.getElementById("to-language");
}
UI.prototype.changeUI = function(){
    //arayüz değiştir.

    this.outputImage.src = `images/${this.toLang.value}.png`;
    console.log(this.toLang.value);

}
UI.prototype.displayTranslate = function(word){
    this.outputWord.textContent = word;
}