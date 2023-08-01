var input = document.getElementById("text");
var output = document.getElementById("copied-element");
const btn = document.getElementById("enter-button");

btn.addEventListener('click', event => {
    printCopied();
})

function printCopied() {
    output.innerHTML = input.value;
}

input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        document.getElementById("enter-button").click();
    }
});



