const name = document.getElementById("flipName");

const names = [
    "DAMBA",
    "DJ DAMBA",
    "DAMBA 256"
];

let index = 0;

setInterval(() => {
    index++;

    if (index >= names.length) {
        index = 0;
    }

    name.style.transform = "rotateX(360deg)";
    name.innerHTML = names[index];

}, 2000);