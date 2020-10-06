module.exports = function towelSort (matrix) {
  if (matrix == undefined || matrix.length == 0) {
    return [];
  }

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 != 0) {
        matrix[i].reverse();
    }
  }

  let fullArray = matrix.reduce((accumulator, currentValue) => {
      return accumulator.concat(currentValue);
  }, []);

  return fullArray;
}
