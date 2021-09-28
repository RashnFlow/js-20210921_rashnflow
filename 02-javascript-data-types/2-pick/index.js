/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  let newObj = {};
  for (const [key, value] of Object.entries(obj))
  {
    if (fields.indexOf(key) !== -1 || fields.indexOf(value) !== -1)
      newObj[key] = value;
  }
  return newObj;
};
