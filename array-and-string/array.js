/**
 * @param {number[]} nums
 * @return {number}
 */
const sum = nums => nums.reduce((acc, num) => (acc += num), 0);

/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = nums => {
  const arrLength = nums.length;

  if (arrLength === 0) {
    return -1;
  }
  let sumLeft = 0;
  for (let i = 0; i < arrLength; i++) {
    sumLeft += nums[i - 1] || 0;
    if (sumLeft === sum(nums.slice(i + 1, arrLength))) {
      return i;
    }
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));

/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = nums => {
  const arrLength = nums.length;
  if (arrLength === 0) {
    return -1;
  }

  let largestIndex = 0;
  for (let i = 0; i < arrLength; i++) {
    if (nums[i] > nums[largestIndex]) {
      largestIndex = i;
    }
  }

  let isTwiceLarger = true;
  for (let j = 0; j < arrLength; j++) {
    if (j !== largestIndex) {
      if (nums[j] * 2 > nums[largestIndex]) {
        isTwiceLarger = false;
      }
    }
  }

  if (isTwiceLarger) {
    return largestIndex;
  }
  return -1;
};

console.log(dominantIndex([3, 6, 1, 0]));
console.log(dominantIndex([1, 2, 3, 4]));

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
        return digits;
      }
    } else {
      digits[i] += 1;
      return digits;
    }
  }
};

console.log(plusOne([9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
