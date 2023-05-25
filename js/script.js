
function initialColor(){
    document.getElementById('stopLight').style.backgroundColor = "black";
    document.getElementById('readyLight').style.backgroundColor = "black";
    document.getElementById('goLight').style.backgroundColor = "black";
}

initialColor();

function stopLight(){
    initialColor();

    document.getElementById('stopLight').style.backgroundColor = "red";
}

// stopLight();

function readyLight(){
    initialColor();

    document.getElementById('readyLight').style.backgroundColor = "yellow";
}

// readyLight();

function goLight(){
    initialColor();

    document.getElementById('goLight').style.backgroundColor = 'green';
}

// goLight();

document.querySelector(".stop-button").onclick = () => {
    stopLight();
}

document.querySelector(".ready-button").onclick = () => {
    readyLight();
}

document.querySelector(".go-button").onclick = () => {
    goLight();
}