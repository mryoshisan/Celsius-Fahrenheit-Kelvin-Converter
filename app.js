function myFunction(valNum) {
  fahr = "℉";
  kelv = "K";

  valNum = parseFloat(valNum);

  document.getElementById("kelvin").innerHTML =
    Math.round(valNum + 273.15) + kelv;
  document.getElementById("fahrenheit").innerHTML =
    Math.round(valNum * 1.8 + 32) + fahr;
}
