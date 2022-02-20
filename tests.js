// JavaScript source code
function printEvenNumbers() {
    for (var i = 0; i <= 10; i++) {
        if (i % 2 == 0) {
            document.getElementById("EvenNumbers").innerText += (i + "\n");
        }
    }
}
