const num1 = document.getElementById("number-1");
const num2 = document.getElementById("number-2");
const result = document.getElementById("result");
const button = document.querySelector("button");

button.addEventListener("click",function(){
    const a = Number(num1.value);
    const b = Number(num2.value);
    
    if (num1.value === "" || num2.value === ""){
        result.textContent = "Plaese enter both number";
        return;
    }
    if (a > b) {
        result.textContent = a + " is big";
    } else if (b > a) {
        result.textContent = b + " is big";
    } else {
        result.textContent = "Both are equal";
    }
});


