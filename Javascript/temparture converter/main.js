// function celsiusToFahrenheit(temp) {
//   return (temp * 9.0) / 5.0 + 32.0;
// }

// function fahrenheitToCelsius(temp) {
//   return ((temp - 32) * 5) / 9;
// }

// function convertTemp(result) {
//   if (
//     (tempType.value == "fahrenheit" && convertTo.value == "fahrenheit") ||
//     (tempType.value == "celsius" && convertTo.value == "celsius")
//   ) {
//     return (document.getElementById("tempoutput").innerText =
//       currentValue.value);
//   }
//   else if (tempType.value == "fahrenheit" && convertTo.value == "celsius")
//   {
//     return document.getElementById("tempoutput").innerText = parseInt(
//       fahrenheitToCelsius(currentValue.value)
//     );
//   } else if (tempType.value == "celsius" && convertTo.value == "fahrenheit")
//   {
//     return (document.getElementById("tempoutput").innerText = parseInt(
//       celsiusToFahrenheit(currentValue.value)
//     ));
//   }
// }

function convertTemperature() {
  const currentValue = document.getElementById("temperatureInput").value;
  const tempType = document.getElementById("tempType").value;
  const convertTo = document.getElementById("temptoConvertIn").value;
  let result = 0;


  console.log(currentValue);
  console.log(tempType);
  console.log(convertTo);


  if (tempType == "celsius" && convertTo == "F") {
    result = (currentValue * 9) / 5 + 32;
    // return console.log(result);
  } else if (tempType == "fahrenheit" && convertTo == "C") {
   (result = ((currentValue - 32) * 5) / 9);
  //  return console.log(result);

  } else {
    result = currentValue;
    //  console.log(result);


    
  }

  document.getElementById("tempoutput").innerText = `${parseInt(result)}°${convertTo}`;
}
