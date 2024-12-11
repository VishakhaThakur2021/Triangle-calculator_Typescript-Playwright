export const CONFIG = {
  BASE_URL: "http://qa-task-env-1.eba-gpid92d6.eu-west-1.elasticbeanstalk.com",
  TRIANGLE_DATA: {
    equilateral: { a: 10, b: 10, c: 10 },
    isosceles: { a: 10, b: 10, c: 8 },
    versatile: { a: 7, b: 8, c: 9 },
  },
  VALIDATION_DATA: {
    decimalSides: {
      a: 5.5,
      b: 5.5,
      c: 5.5,
    },
    invalideSides: {
      a: 1,
      b: 1,
      c: 10,
    },
    missingfield: {
      a: 10,
      b: 10,
    },
    zeroSides: {
      a: -5,
      b: 0,
      c: 10,
    },
    nonNumericSides: {
      a: "five",
      b: 10,
      c: 15,
    },
    extraSides: {
      a: 10,
      b: 15,
      c: 20,
      d: 25,
      e: 30,
    },
  },
};
