/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  // if (str === "")
  //   return "";
  // else
  //   return turnMeBaby(str.substr(1)) + str.charAt(0);
  return (str === '') ? '' : turnMeBaby(str.substr(1)) + str.charAt(0);
};

export default turnMeBaby;
