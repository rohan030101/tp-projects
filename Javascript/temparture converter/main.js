function convertTemperature() {
  let currentValueInput = document.getElementById("temperatureInput").value;
  let temperatureType = document.getElementById("tempType");
  let convertTo = document.getElementById("temptoConvertIn").value;
  let result = 0;

  console.log(currentValueInput);
  console.log(temperatureType);
  console.log(convertTo);

  if (temperatureType.value == "celsius" && convertTo == "F") {
    result = (currentValueInput * 9) / 5 + 32;
  } else if (temperatureType.value == "fahrenheit" && convertTo == "C") {
    result = ((currentValueInput - 32) * 5) / 9;
  } else if (temperatureType.value == "fahrenheit" && convertTo && "F") {
    temperatureType.value = "celsius";
    result = (currentValueInput * 9) / 5 + 32;
  } else {
    temperatureType.value = "fahrenheit";
    result = ((currentValueInput - 32) * 5) / 9;
  }

  document.getElementById("tempoutput").innerHTML = `${parseFloat(
    result
  ).toFixed(1)}<sup>°${convertTo}</sup>`;
}
