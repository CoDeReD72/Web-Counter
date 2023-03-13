
let count = 0;


//==== SELECTING HTML ELEMENTS ====
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    
    //==== CHANGING COUNTER VALUE ====
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    //==== CHANGING COLOUR ====
    if (count > 0) {
      value.style.color = "lime";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "aqua";
    }
    value.textContent = count;
  });
});