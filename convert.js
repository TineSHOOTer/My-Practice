window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
   const cInput = document.getElementById("cInput");
   const fInput = document.getElementById("fInput");
   const convertButton = document.getElementById("convertButton");
   const errorMessage = document.getElementById("errorMessage");

   // Register the Convert button's click event handler
   convertButton.addEventListener("click", function () {
      const celsiusValue = parseFloat(cInput.value);
      const fahrenheitValue = parseFloat(fInput.value);

      // Check which input field contains a value and perform conversion
      if (isNaN(celsiusValue) && cInput.value) {
         errorMessage.textContent = `${cInput.value} is not a number`;
         fInput.value = "";
      } else if (isNaN(fahrenheitValue) && fInput.value) {
         errorMessage.textContent = `${fInput.value} is not a number`;
         cInput.value = "";
      } else {
         errorMessage.textContent = "";

         if (!isNaN(celsiusValue)) {
            fInput.value = convertCtoF(celsiusValue);
            updateWeatherImage(parseFloat(fInput.value));
         } else if (!isNaN(fahrenheitValue)) {
            cInput.value = convertFtoC(fahrenheitValue);
            updateWeatherImage(fahrenheitValue);
         }
      }

      // Change image based on the converted temperature in Fahrenheit
      updateWeatherImage(parseFloat(fInput.value));
   });

   // Clear opposing field when one field has input
   cInput.addEventListener("input", function () {
      fInput.value = "";
   });

   fInput.addEventListener("input", function () {
      cInput.value = "";
   });
}

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   return degreesCelsius * 9 / 5 + 32;
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   return (degreesFahrenheit - 32) * 5 / 9;

}
function updateWeatherImage(fahrenheit) {
   const weatherImage = document.getElementById("weatherImage");

   if (fahrenheit < 32) {
      weatherImage.src = "images/cold.png";
   } else if (fahrenheit >= 32 && fahrenheit <= 50) {
      weatherImage.src = "images/cool.png";
   } else {
      weatherImage.src = "images/warm.png";
   }
}

