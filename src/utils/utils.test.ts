import { camelCaseObjectKeys, snakeCaseObjectKeys } from './utils';

describe('Utils', () => {
  describe('camelCaseObjectKeys', () => {
    it('should return an object with camelCase keys', () => {
      const input = {
        first_name: 'John',
        last_name: 'Doe',
        age: 30,
      };
      const expected = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
      };
      const result = camelCaseObjectKeys(input);
      expect(result).toEqual(expected);
    });
  });

  describe('snakeCaseObjectKeys', () => {
    it('should return an object with snakeCase keys', () => {
      const input = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
      };
      const expected = {
        first_name: 'John',
        last_name: 'Doe',
        age: 30,
      };
      const result = snakeCaseObjectKeys(input);
      expect(result).toEqual(expected);
    });
  });
});
