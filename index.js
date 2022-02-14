const type = document.querySelector(".type");
const strtype = type.textContent;
const typearray = strtype.split("");

const des = document.querySelector(".des");
const strdes = des.textContent;
const desarray = strdes.split("");

type.textContent = "";
des.textContent = "";

    for(i = 0; i<typearray.length; i++){
    type.innerHTML += "<span>" + typearray[i] + "</span>"
}

    for(j = 0; j<desarray.length; j++){
        des.innerHTML += "<span>" + desarray[j] + "</span>"
    }

let char = 0;
let charr = 0;
let timer = setInterval(fadeclass, 50);

function fadeclass() {
    const str = type.querySelectorAll("span")[char]
    const strr = des.querySelectorAll("span")[charr]

    str.classList.add('fade');
    strr.classList.add('fade');

    char++;
    charr++;
    
        if(char === typearray.length){
            complete();
            return;
        }
}

function complete(){
    clearInterval(timer);
    timer = null;
}

console.log(typearray)
console.log(char)