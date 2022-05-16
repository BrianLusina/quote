import mapKeys from 'lodash/mapKeys';
import camelCase from 'lodash/camelCase';
import snakeCase from 'lodash/snakeCase';

/**
 * Returns the same object with the keys camel cased
 * @param {Object} obj input object
 * @returns {Object} object with the keys camel cased
 * */
export const camelCaseObjectKeys = (
  obj: Record<string | number, unknown>,
): Record<string | number, unknown> => {
  return mapKeys(obj, (v, k) => camelCase(k));
};

/**
 * Returns the same object with the keys snake cased
 * @param {Object} obj input object
 * @returns {Object} object with the keys snake cased
 * */
export const snakeCaseObjectKeys = (
  obj: Record<string | number, unknown>,
): Record<string | number, unknown> => {
  return mapKeys(obj, (v, k) => snakeCase(k));
};
