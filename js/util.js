//Материалы сайта https://developer.mozilla.org/
//Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomNum(min, max) {
  if (min < 0 || max < 0) {
    return 'Укажите положительный диапазон';
  }
  if (min >= max) {
    return 'Внимание: min должен быть меньше, чем max';
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
getRandomNum(-2, 4);

//Материалы сайта https://developer.mozilla.org/
//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
function getRandomFloatingPoint (min, max, num) {
  if (min < 0 || max < 0) {
    return 'Укажите положительный диапазон';
  }
  if (min >= max) {
    return 'Внимание: min должен быть меньше, чем max';
  }
  return +(Math.random() * (max - min) + min).toFixed(num);
}
getRandomFloatingPoint(1, 1.4, 5);

export { getRandomNum, getRandomFloatingPoint }; // Экспорт после всего кода
