function either404(numbers) {
  let isZeroFound = false;
  let isFourFound = false;
  for (let index in numbers) {
    if (index === 0) continue;
    if (numbers[index] === 0 && numbers[index - 1] === 0) {
      isZeroFound = true;
    }
    if (numbers[index] === 4 && numbers[index - 1] === 4) {
      isFourFound = true;
    }
  }
  if (isZeroFound && isFourFound) return false;
  if (isZeroFound || isFourFound) return true;
  return false;
}

console.log(either404([0, 0, 3, 6,  4]));
