

const temperature = document.getElementById("temperature");
const unit = document.getElementById("unit");

const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");

const errorMessage = document.getElementById("errorMessage");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");



convertBtn.addEventListener("click", convertTemperature);




function convertTemperature() {

    const value = temperature.value.trim();

    if (value === "") {

        showError("Please enter a temperature.");

        return;
    }

    if (isNaN(value)) {

        showError("Only numeric values are allowed.");

        return;
    }

    let input = Number(value);

    let celsius;
    let fahrenheit;
    let kelvin;




    if (unit.value === "celsius") {

        if (input < -273.15) {

            showError("Temperature cannot be below absolute zero.");

            return;
        }

        celsius = input;
        fahrenheit = (input * 9 / 5) + 32;
        kelvin = input + 273.15;
    }


  

    else if (unit.value === "fahrenheit") {

        if (input < -459.67) {

            showError("Temperature cannot be below absolute zero.");

            return;
        }

        fahrenheit = input;
        celsius = (input - 32) * 5 / 9;
        kelvin = celsius + 273.15;
    }


   

    else {

        if (input < 0) {

            showError("Kelvin cannot be less than 0.");

            return;
        }

        kelvin = input;
        celsius = input - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    }


    clearError();

    celsiusResult.innerHTML =
        celsius.toFixed(2) + " °C";

    fahrenheitResult.innerHTML =
        fahrenheit.toFixed(2) + " °F";

    kelvinResult.innerHTML =
        kelvin.toFixed(2) + " K";

}




resetBtn.addEventListener("click", function () {

    temperature.value = "";

    unit.selectedIndex = 0;

    celsiusResult.innerHTML = "--";

    fahrenheitResult.innerHTML = "--";

    kelvinResult.innerHTML = "--";

    clearError();

});




temperature.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        convertTemperature();

    }

});



temperature.addEventListener("input", function () {

    clearError();

});




function showError(message) {

    errorMessage.innerHTML = message;

}




function clearError() {

    errorMessage.innerHTML = "";

}