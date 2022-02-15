const type = document.querySelector(".type");
const strtype = type.textContent;
const typearray = strtype.split("");

const des = document.querySelector(".des");
const strdes = des.textContent;
const desarray = strdes.split("");

const photo = document.querySelector(".photo");
const strphoto = photo.textContent;
const photoarray = strphoto.split("");

type.textContent = "";
des.textContent = "";
photo.textContent = "";

    for(i = 0; i<typearray.length; i++){
    type.innerHTML += "<span>" + typearray[i] + "</span>"
}

    for(j = 0; j<desarray.length; j++){
        des.innerHTML += "<span>" + desarray[j] + "</span>"
    }

    for(k = 0; k<photoarray.length; k++) {
        photo.innerHTML += "<span>" + photoarray[k] + "</span>"
    }

let char = 0;
let charr = 0;
let charrr = 0;
let timer = setInterval(fadetyp, 20);
let timerr = setInterval(fadedes, 20);
let timerrr = setInterval(fadephoto, 20);

function fadetyp() {
    const str = type.querySelectorAll("span")[char];

    str.classList.add('fade');

    char++;
    
        if(char === typearray.length){
            complete();
            return;
        }
        else{
            fadetyp();
        }
};

function fadedes() {
    let stri = des.querySelectorAll('span')[charr];
    stri.classList.add('fade');

    charr++;
    
        if(charr === desarray.length){
            completee();
            return;
        }
};

function fadephoto() {
    let strii = photo.querySelectorAll('span')[charrr];
    strii.classList.add('fade');

    charrr++;

        if(charrr === photoarray.length){
            completeee();
            return
        }
};




function complete(){
    clearInterval(timer);
    timer = null;
    
}

function completee(){
    clearInterval(timerr);
    timerr = null;
}

function completeee(){
    clearInterval(timerrr);
    timerrr = null;
}

const blob = document.getElementsByClassName('bob')
blob