// Initial Value Set to 0
let count = 0;

const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {

        //==== CHANGING COUNTER ====
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        }
        else if (styles.contain("increase")) {
            count++
        }
        else {
            count = 0;
        }

        // ==== COLOUR GRADING ====
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.colour = "red";
        }
        if (count === 0) {
            value.style.color = "#222";
        }
        value.textContent.Content = count;
    });
});