const messages = [
    "[•] Initializing PHP server at localhost:8080",
    "[+] PHP Server has started successfully!",
    "[•] Initializing tunnelers at same address",
    "[+] Waiting for login info....Press Ctrl+C to exit",
    "> Reading your Files",
    "> Password files Detected",
    "> Sending all passwords and personal files to server",
    "> Cleaning up",
    "Haha you got hecked sucessfully!!!"
];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeWriter() {
    for (let i = 0; i < messages.length; i++) {
        const line = document.getElementById(`line${i + 1}`);
        line.innerHTML = "";
        for (let j = 0; j < messages[i].length; j++) {
            line.innerHTML += messages[i][j];
            await sleep(30);
        }
        if (i < messages.length - 1) {
            line.innerHTML += '<span class="blink">...</span>';
            await sleep(55);
        }
        await sleep(getRandomDelay(500, 3000));
    }
}

function getRandomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

typeWriter();