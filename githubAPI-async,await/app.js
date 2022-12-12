//Elemanları seçme işlemi
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");


//github.js'den obje oluşturma
const github = new Github();
//ui.js'den obje oluşturma 
const ui = new UI();


eventListeners();
function eventListeners(){
    githubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearced);
    lastUsers.addEventListener("click",researchSearcedUser);
}


//sayfamız açıldığında 
async function getAllSearced(){
    let users = Storage.getAllSearcedUsersFromStorage();
    if(users.length !==0){
        let result = "";
        users.forEach(user => {
            result +=`<li class="list-group-item"><a href="#" class="searcedUser">${user}</a></li> `;
        });
        await ui.lastUsersSectionVisible();
        lastUsers.innerHTML = result;
    }


}


//form submit olduğunda 
function getData(e){
    let username = nameInput.value.trim();

    if(username === ""){
        alert("Lütfen geçerli bir kullanıcı adı girin.");
    }
    else{
        github.getGithubData(username)
        .then(response => {
            if(response.user.message === "Not Found"){
                ui.showError("Girilen ada sahip kullanıcı bulunamadı!");
            }
            else {
                ui.addSearchedUserToUI(username);
                Storage.addSearchedUsersToStorage(username);
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);
            }
        })
        .catch(err => ui.showError(err));
    }
    ui.lastUsersSectionVisible();
    ui.clearInput();//input temizleme.
    e.preventDefault(); 
}


function researchSearcedUser(e){
    if(e.target.className === "searcedUser"){
        username = e.target.textContent;
        nameInput.focus;
        nameInput.value=username;

        github.getGithubData(username)
        .then(response => {
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);
        })
        .catch(err => ui.showError(err));
    }
    ui.clearInput();
}


// Tüm aramaları temizle 
function clearAllSearched(){
    if(confirm("Emin misiniz?")){
         Storage.clearAllSearchedUsersFromStorage();
         ui.clearAllSearchedFromUI();
         ui.lastUsersSectionHidden();
    }
}
