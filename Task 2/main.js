let input_checkboxes = document.getElementsByClassName("email");

function updatePage() {
    let input_checkbox = document.getElementsByClassName("email");
    let output = [];
    let email = ["mountain@gmail.com", "tree@gmail.com", "world@gmail.com", "cloud@gmail.com", "river@gmail.com", "wood@gmail.com", "field@gmail.com", "snow@gmail.com", "rain@gmail.com", "wind@gmail.com"];

    for (let i = 0; i < input_checkbox.length; ++i) {
        if (input_checkbox[i].checked) { output.push(email[i]); }
    }

    let p = document.querySelector("p");

    (output.length) ? p.textContent = output.join("; ") : p.textContent = "Немає обраної електронної пошти";
}

for (let i = 0; i < input_checkboxes.length; i++) { input_checkboxes[i].addEventListener("change", updatePage); }