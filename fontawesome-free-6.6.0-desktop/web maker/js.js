let code_input;
let code_output;
let code_run;
// calling element into their variables
code_input = document.getElementById("input");
code_output = document.getElementById("output");
code_run = document.getElementById("run");


code_run.addEventListener("click", function () {
    code_output.innerHTML = code_input.textContent;
})
