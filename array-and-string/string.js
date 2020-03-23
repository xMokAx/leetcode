/**
 *
 * @param {string} str
 * @return {bigint}
 */
const binToNum = str => {
  let num = 0n;
  for (let i = 0; i < str.length; i++) {
    num += BigInt(str[str.length - i - 1]) * 2n ** BigInt(i);
  }
  return num;
};

/**
 *
 * @param {bigint} num
 * @return {string}
 */
const binaryConverter = num => {
  if (num === 0n) {
    return "0";
  }
  let res = "";
  while (num >= 1) {
    if (num % 2n === 0n) {
      res = "0" + res;
    } else {
      res = "1" + res;
    }
    num = num / 2n;
  }
  return res;
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => binaryConverter(binToNum(a) + binToNum(b));

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
console.log(addBinary("0", "0"));
console.log(
  addBinary(
    "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
    "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
  )
);

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary2 = (a, b) => (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);

console.log(addBinary2("11", "1"));
console.log(addBinary2("1010", "1011"));
console.log(addBinary2("0", "0"));
console.log(
  addBinary2(
    "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
    "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
  )
);

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (!needle) {
    if (needle === "") {
      return 0;
    }
    return -1;
  }
  for (let i = 0; i < haystack.length - (needle.length - 1); i++) {
    if (haystack[i] === needle[0]) {
      let str = "";
      let j = 0;
      while (str.length < needle.length) {
        str += haystack[i + j];
        j++;
      }
      if (str === needle) {
        return i;
      }
    }
  }
  return -1;
};

console.log(strStr("hello", "ll"));

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr2 = (haystack, needle) => haystack.indexOf(needle);

console.log(strStr2("hello", "ll"));

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  if (!strs || strs.length === 0) {
    return "";
  }
  if (strs.length === 1) {
    return strs[0];
  }
  for (let i = 0; i < strs[0].length; i++) {
    const prefix = strs[0].substring(0, strs[0].length - i);
    for (let j = 1; j < strs.length; j++) {
      if (strs[j].length < prefix.length) {
        break;
      }
      if (prefix !== strs[j].substring(0, prefix.length)) {
        break;
      }
      if (j === strs.length - 1) {
        return prefix;
      }
    }
  }
  return "";
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
