const users = document.querySelectorAll(' .contact-item.cf');
var numberOfUsers = users.length;
var currentPlace = 0;
const containerPage = document.querySelector(' .contact-list');


function initializeThePage() {
    containerPage.innerHTML = "";
    loadThePage(currentPlace);
    createButtons(numberOfUsers / 10 + 1);
    let theCurrentPage = document.querySelectorAll('a');
    theCurrentPage[currentPlace].className = "active";
}

function loadThePage(number) {
    if (number == parseInt(numberOfUsers / 10)) {
        for (var i = 0; i < numberOfUsers % 10; i++) {
            containerPage.innerHTML += users[number * 10 + i].outerHTML;
        }
    } else {
        for (var i = 0; i < 10; i++) {
            containerPage.innerHTML += users[number * 10 + i].outerHTML;
        }
    }
    
}

function createButtons(numberOfUsers) {
    let pagination = document.createElement("ul");
    pagination.className = "pagination";
    for (var i = 1; i <= numberOfUsers; i++) {
        let pageNumberList = document.createElement("li");
        let pageNumberA = document.createElement("a");
        pageNumberList.appendChild(pageNumberA);
        pagination.appendChild(pageNumberList);      
        pageNumberA.innerHTML = i;
        pageNumberA.href = "#";
        pageNumberA.addEventListener("click", () => {
            currentPlace = pageNumberA.innerText - 1;            
            initializeThePage();
        })    
    }
    
    containerPage.appendChild(pagination);    
}

initializeThePage();

