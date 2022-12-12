//sadece storage işlemleri 

class Storage{


    static getAllSearcedUsersFromStorage(){
        //tüm kullanıcıları al

        let users;

        if(localStorage.getItem("searched") === null){
            users = [];
        }
        else {
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users;

    }


    static addSearchedUsersToStorage(username){
        //Kullanıcı ekle.

        let users = this.getAllSearcedUsersFromStorage();

        //indexOf
        if(users.indexOf(username) === -1){
            users.push(username);
        }
        localStorage.setItem("searched",JSON.stringify(users));

    }
    static clearAllSearchedUsersFromStorage(){
        //Tüm kullanıcıları sil
        localStorage.removeItem("searched");
    }
}