function convertTemp() {
  const input = parseFloat(document.getElementById('tempInput').value);
  const from = document.getElementById('unitFrom').value;
  const to = document.getElementById('unitTo').value;
  const resultDiv = document.getElementById('result');

  if (isNaN(input)) {
    resultDiv.innerText = "Please enter a valid number!";
    resultDiv.style.color = "red";
    return;
  }

  let result;

  if (from === to) {
    result = input;
  } else {
    // Convert input to Celsius first
    let celsius;
    switch (from) {
      case "celsius":
        celsius = input;
        break;
      case "fahrenheit":
        celsius = (input - 32) * (5/9);
        break;
      case "kelvin":
        celsius = input - 273.15;
        break;
    }

    // Then convert Celsius to target unit
    switch (to) {
      case "celsius":
        result = celsius;
        break;
      case "fahrenheit":
        result = (celsius * 9/5) + 32;
        break;
      case "kelvin":
        result = celsius + 273.15;
        break;
    }
  }

  resultDiv.innerText = `Result: ${result.toFixed(2)}° ${unitLabel(to)}`;
  resultDiv.style.color = "#222";
}

function unitLabel(unit) {
  switch(unit) {
    case "celsius": return "C";
    case "fahrenheit": return "F";
    case "kelvin": return "K";
    default: return "";
}
}
