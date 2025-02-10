document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("message").innerText = "Yay! I love you, Azeemah! ❤️😍";
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    let maxX = window.innerWidth - this.clientWidth - 20;
    let maxY = window.innerHeight - this.clientHeight - 20;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
