export function getRandomNumber(num) {
  return (Math.random() * num).toFixed(0);
}

export function colorRGB() {
  var coolor =
    "(" +
    getRandomNumber(255) +
    "," +
    getRandomNumber(255) +
    "," +
    getRandomNumber(255) +
    ")";
  return "rgb" + coolor;
}
