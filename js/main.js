const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return NaN;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const STRING = 'qwertyuiopasdfghjklzxcvbnm';
const MIN_LENGTH = 20;
const MAX_LENGTH = 140;
const getStringLength = (str, min, max) => str.length > min && str.length < max;
getRandomNumber(20, 140);
getStringLength(STRING, MIN_LENGTH, MAX_LENGTH);
