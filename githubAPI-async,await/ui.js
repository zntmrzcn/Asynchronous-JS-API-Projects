//sadece UI işlemleri

class UI{
    constructor(){
        this.nameInput = document.getElementById("githubname");
        this.profileDiv = document.getElementById("profile");
        this.repoDiv = document.getElementById("repos");
        this.lastUsers = document.getElementById("last-users");
        this.lastUsersSection = document.getElementById("last-users-section");
        this.inputField = document.getElementById("githubname");
        this.cardBody = document.querySelector(".card-body");
        this.profileBorderline = document.getElementById("profile-borderline");
    }

    clearInput(){
        this.inputField.value = "";
    }

    lastUsersSectionHidden(){
        this.lastUsersSection.style.visibility="hidden";
    }
    lastUsersSectionVisible(){
        this.lastUsersSection.style.visibility="visible";
    }

    showUserInfo(user){
        this.profileBorderline.className="card card-body mb3";
        this.profileDiv.innerHTML = `
        <div>
            <h3 class="page-heading mb-3">Kullanıcı Bilgileri</h3>
                <div class="row">
                    <div class="col-md-4">
                        <a href="${user.html_url}" target = "_blank">
                         <img class="img-fluid mb-2" src="${user.avatar_url}"> 
                        </a>
                         <hr>
                         <div id="fullName"><strong>${user.name}</strong></div>
                         <hr>
                         <div id="bio"><b>Bio:</b> ${user.bio}</div>
                    </div>
                    <div class="col-md-8">
                            <button class="btn btn-secondary">
                                  Takipçi  <span class="badge badge-light">${user.followers}</span>
                            </button>
                            <button class="btn btn-info">
                                 Takip Edilen  <span class="badge badge-light">${user.following}</span>
                            </button>
                            <button class="btn btn-danger">
                                Repolar  <span class="badge badge-light">${user.public_repos}</span>
                            </button>
                            <hr>
                            <li class="list-group">
                                <li class="list-group-item borderzero">
                                    <img src="images/company.png" width="30px"> <span id="company"><b>Şirket: </b>${user.company}</span>  
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/location.png" width="30px"> <span id = "location"><b>Adres: </b>${user.location}</a>
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/mail.png" width="30px"> <span id="mail"><b>Email: </b>${user.email}</span>
                            </li>
                    </div>
                </div>
                      <br>
                <hr>
        </div>
        `;
    }

    showRepoInfo(repos){
        this.repoDiv.innerHTML = `
            <h3 class="page-heading mb-3">Repolar</h3>
            <br>
            <div class="row mx-2">
                <div class="col-md-3"><strong>İsim</strong></div>
                <div class="col-md-6"><strong>Açıklama</strong></div>
            </div>
            `;
        repos.forEach((repo,i) => {
            
            this.repoDiv.innerHTML+=`
            <div class="mb-2 card-body">
                <div class="row">
                    <div class="col-md-3">
                        <a href="${repo.html_url}" target = "_blank" id = "repoName"><strong>${i+1}- ${repo.name}</strong></a>
                    </div>
                    <div class="col-md-6">
                        <p>${repo.description}</p>
                    </div>
                    <div class="col-md-3">
                        <button class="btn btn-secondary">
                            Starlar  <span class="badge badge-light" id="repoStar"> ${repo.stargazers_count} </span>
                        </button>

                        <button class="btn btn-info">
                            Forklar  <span class="badge badge-light" id ="repoFork"> ${repo.forks_count} </span>
                        </button>
                    </div>
                </div>
            </div>`
        });
        
    }

    addSearchedUserToUI(username){
        let users = Storage. getAllSearcedUsersFromStorage();

        if(users.indexOf(username) ===-1){
            // <!-- <li class="list-group-item"></li> -->
          
            const li = document.createElement("li");
            li.className = "list-group-item";
            
            const a = document.createElement("a");
            a.href ="#";
            a.className = "searcedUser"
            a.textContent = username;


            li.appendChild(a);
            this.lastUsers.appendChild(li);

        }
    }

    clearAllSearchedFromUI(){
        while(this.lastUsers.firstElementChild !== null){
            this.lastUsers.removeChild(this.lastUsers.firstElementChild);
        }
    }

    showError(message){
        const div = document.createElement("div");
        div.className = "alert alert-danger";
        div.textContent = message;

        this.cardBody.appendChild(div);
        setTimeout(()=>{
            div.remove();
        },4000);
    }
}