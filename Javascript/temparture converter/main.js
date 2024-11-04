  currentValue = document.getElementById("temperatureInput");
  tempType = document.getElementById("tempType");
  convertTo = document.getElementById("temptoConvertIn");

  function celsiusToFahrenheit(temp) {
    return (temp * 9.0) / 5.0 + 32.0;
  }

  function fahrenheitToCelsius(temp) {
    return ((temp - 32) * 5) / 9;
  }

  function convertTemp(result) {
    if (
      (tempType.value == "fahrenheit" && convertTo.value == "fahrenheit") ||
      (tempType.value == "celsius" && convertTo.value == "celsius")
    ) {
      return (document.getElementById("tempoutput").innerText =
        currentValue.value);
    } 
    else if (tempType.value == "fahrenheit" && convertTo.value == "celsius")
    {
      return document.getElementById("tempoutput").innerText = parseInt(
        fahrenheitToCelsius(currentValue.value)
      );
    } else if (tempType.value == "celsius" && convertTo.value == "fahrenheit")
    {
      return (document.getElementById("tempoutput").innerText = parseInt(
        celsiusToFahrenheit(currentValue.value)
      ));
    }
  }

