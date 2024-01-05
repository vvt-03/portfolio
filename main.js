// Letter by Letter Animation for "Hello World!!"
const helloWorldText = "\nHello World!!";
const helloWorldElement = document.getElementById("helloWorld");

let index = 0;

function animateHelloWorld() {
    if (index < helloWorldText.length) {
        helloWorldElement.innerHTML += helloWorldText.charAt(index);
        index++;
        setTimeout(animateHelloWorld, 150); // Adjust the delay between letters (in milliseconds)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    animateHelloWorld();
});
