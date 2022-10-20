const getRandomNumber = (min, max) => {
  if (min < 20 || max > 140) {
    return NaN
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('Случайное число в интервале с 20 до 140 составляет ' + getRandomNumber(20, 140));

const string = 'qwertyuiopasdfghjklzxcvbnm';
const minLength = 20;
const maxLength = 140;

const getStringLength = (str, min, max) => str.length > min && str.length < max;

console.log('Результат проверки на длину строки: ' + getStringLength(string, minLength, maxLength));
