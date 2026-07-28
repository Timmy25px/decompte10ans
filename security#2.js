const secretButton =
document.getElementById("secretButton");


const fakeLock =
document.getElementById("fakeLock");


const fakeLogin =
document.getElementById("fakeLogin");


const fakeError =
document.getElementById("fakeError");



let unlocked = false;



// clic sur le carré invisible

secretButton.onclick = () => {

    if(unlocked) return;


    fakeLock.style.display="block";

};



// faux mot de passe

fakeLogin.onclick = () => {


    fakeError.innerHTML =
    "❌ Mot de passe incorrect.";


};



// exemple de fonction pour débloquer ton compteur

function unlockContent(){

    unlocked=true;

    fakeLock.style.display="none";


    document.getElementById("protectedContent")
    .style.display="block";


}
