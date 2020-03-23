/**
 *
 * @param {any[]} arr
 * @param {number} i1
 * @param {number} i2
 */
const swap = (arr, i1, i2) => {
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = s => {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    swap(s, l, r);
    l++;
    r--;
  }
};

const arr = ["H", "a", "n", "n", "a", "h"];
reverseString(arr);
console.log(arr);

/**
 *
 * @param {number[]} arr
 * @param {number} l
 * @param {number} r
 */
const partition = (arr, l, r) => {
  const pivot = arr[Math.floor((l + r) / 2)];
  while (l <= r) {
    while (arr[l] < pivot) {
      l++;
    }
    while (arr[r] > pivot) {
      r--;
    }
    if (l <= r) {
      swap(arr, l, r);
      l++;
      r--;
    }
  }
  return l;
};

/**
 *
 * @param {number[]} arr
 * @param {number} l
 * @param {number} r
 */
const quickHelper = (arr, l, r) => {
  if (arr.length > 1) {
    const index = partition(arr, l, r);
    if (l < index - 1) {
      quickHelper(arr, l, index - 1);
    }
    if (r > index) {
      quickHelper(arr, index, r);
    }
  }
};

/**
 *
 * @param {number[]} arr
 */
const quickSort = arr => {
  return quickHelper(arr, 0, arr.length - 1);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = nums => {
  quickSort(nums);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      sum += nums[i];
    }
  }
  return sum;
};

console.log(arrayPairSum([1, 4, 3, 2]));

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  let l = 0,
    r = numbers.length - 1;
  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum < target) {
      l++;
    } else if (sum > target) {
      r--;
    } else {
      return [l + 1, r + 1];
    }
  }
  return [];
};

console.log(twoSum([-3, 3, 4, 90], 0));
console.log(twoSum([-1, 0], -1));
console.log(twoSum([2, 7, 11, 15], 9));

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = nums => {
  if (nums.length === 1) {
    return nums[0];
  }

  let count = 0,
    max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    }
    max = Math.max(max, count);
    if (nums[i] === 0) {
      count = 0;
    }
  }
  return max;
};

console.log(findMaxConsecutiveOnes([0, 1]));

const findMaxConsecutiveOnes2 = nums => {
  if (nums.length === 1) {
    return nums[0];
  }
  let l = 0,
    r = nums.length - 1,
    max = 0,
    countL = 0,
    countR = 0;
  while (l < r) {
    if (nums[l] === 1) {
      countL++;
    }
    max = Math.max(max, countL);
    if (nums[l] === 0) {
      countL = 0;
    }
    if (nums[r] === 1) {
      countR++;
    }
    max = Math.max(max, countR);
    if (nums[r] === 0) {
      countR = 0;
    }
    l++;
    r--;
  }
  if (nums[l] === 1 && nums[r] === 1) {
    max = Math.max(max, countL + countR);
  }
  return max;
};

console.log(findMaxConsecutiveOnes2([0, 1]));

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (s, nums) => {
  let min = nums.length + 1,
    i = 0,
    j = 0,
    sum = 0;

  while (j < nums.length) {
    sum += nums[j++];

    while (sum - nums[i] >= s && i < j) {
      sum -= nums[i++];
    }

    if (sum >= s) {
      min = Math.min(min, j - i);
    }
  }

  return min > nums.length ? 0 : min;
};

console.log(minSubArrayLen(15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]));
