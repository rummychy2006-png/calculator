function addValue(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculate() {
    let expression = document.getElementById("result").value;

    if (expression === "") {
        return;
    }

    try {
        document.getElementById("result").value = eval(expression);
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
