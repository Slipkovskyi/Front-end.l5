function ShowLanguage() {
    let input_checkbox = document.getElementsByClassName("language");
    let output = [];
    let language = ["Ukrainian", "English", "Spanish"];

    for (let i = 0; i < input_checkbox.length; ++i) (input_checkbox[i].checked) ? output.push(language[i]) : null;

    let p = document.querySelector("p");
    output.length ? p.textContent = output.join(", ") : p.textContent = "Немає обраних мов";
}