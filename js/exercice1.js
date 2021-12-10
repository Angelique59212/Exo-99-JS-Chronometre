
let seconds = document.getElementById("seconds");
let stopButton = document.getElementById("stop-button");
let compteur = 0;
let countUp = function() {
    let timeoutId = setTimeout(()=> {
        compteur ++;
        seconds.innerHTML = compteur.toString();
        countUp();
    },1000);
    let stopCountUp = () => {
        clearTimeout(timeoutId);
    };
    stopButton.addEventListener("click", stopCountUp);
};
countUp();






