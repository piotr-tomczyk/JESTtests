export const analizeArray = (array) => {
  if (array.length > 0) {
    let sum = 0;
    let min = array[0];
    let max = array[0];
    let length = array.length;
    for (let i = 0; i < length; i++) {
      sum += array[i];
      if (array[i] < min) {
        min = array[i];
      }
      if (array[i] > max) {
        max = array[i];
      }
    }
    let average = sum / array.length;
    return {
      average: average,
      min: min,
      max: max,
      length: length,
    };
  }
  return "array must have lenght bigger than 0";
};
