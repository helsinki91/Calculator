const display = document.getElementById("display");
let calculated = false;

const appendToDisplay = (input) => {
    if (calculated) {
        display.value = "";
        calculated = false;
    }

    display.value += input;
}

const clearDisplay = () => {
    display.value = "";
}

const calculate = () => {
    try {
        display.value = eval(display.value);
        calculated = true;
    } catch {
        display.value = "Error";
    }
}