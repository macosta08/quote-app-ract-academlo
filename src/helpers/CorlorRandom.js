export function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
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
