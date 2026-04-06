function convertCtoF(celsius) {
   return celsius * 9 / 5 + 32;
}

function convertFtoC(fahrenheit) {
   return (fahrenheit - 32) * 5 / 9;
}

function domLoaded() {
   const cInput = document.getElementById("cInput");
   const fInput = document.getElementById("fInput");
   const convertButton = document.getElementById("convertButton");
   const errorMessage = document.getElementById("errorMessage");
   const weatherImage = document.getElementById("weatherImage");

   cInput.addEventListener("input", function () {
      fInput.value = "";
   });

   fInput.addEventListener("input", function () {
      cInput.value = "";
   });

   convertButton.addEventListener("click", function () {
      let fahrenheit;

      if (cInput.value !== "") {
         const celsius = parseFloat(cInput.value);
         if (isNaN(celsius)) {
            errorMessage.textContent = cInput.value + " is not a number";
            return;
         }
         fahrenheit = convertCtoF(celsius);
         fInput.value = fahrenheit;
      } else {
         fahrenheit = parseFloat(fInput.value);
         if (isNaN(fahrenheit)) {
            errorMessage.textContent = fInput.value + " is not a number";
            return;
         }
         const celsius = convertFtoC(fahrenheit);
         cInput.value = celsius;
      }

      errorMessage.textContent = "";

      if (fahrenheit < 32) {
         weatherImage.src = "images/cold.png";
      } else if (fahrenheit <= 50) {
         weatherImage.src = "images/cool.png";
      } else {
         weatherImage.src = "images/warm.png";
      }
   });
}

document.addEventListener("DOMContentLoaded", domLoaded);
