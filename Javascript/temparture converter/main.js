function convertTemperature() {
  let currentValue = document.getElementById("temperatureInput").value;
  let tempType = document.getElementById("tempType");
  let convertTo = document.getElementById("temptoConvertIn").value;
  let result = 0;

  console.log(currentValue);
  console.log(tempType);
  console.log(convertTo);

  if (tempType.value == "celsius" && convertTo == "F") {
    result = (currentValue * 9) / 5 + 32;
  } else if (tempType.value == "fahrenheit" && convertTo == "C") {
    result = ((currentValue - 32) * 5) / 9;
  } else if (tempType.value == "fahrenheit" && convertTo && "F") {
    tempType.value = "celsius";
    result = (currentValue * 9) / 5 + 32;
  } else {
    tempType.value = "fahrenheit";
    result = ((currentValue - 32) * 5) / 9;
  }

  document.getElementById("tempoutput").innerHTML = `${parseFloat(
    result
  ).toFixed(1)}<sup>°${convertTo}</sup>`;
}
