function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

function isSimpleObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

function snakeToCamel(str) {
  return str.replace(/[_-](\w|$)/g, (match, value) => value.toUpperCase());
}

function convertCamelToSnake(str) {
  const pattern = /[a-z][A-Z]/g;

  const convertedString = str.replace(pattern, (letters) => {
    const leftOperand = letters[0];
    const rightOperand = letters[1].toLowerCase();
    const result = `${leftOperand}_${rightOperand}`;

    return result;
  });

  return convertedString;
}

function traverse(obj, transform, options) {
  if (!obj) {
    return obj;
  }

  if (typeof obj !== 'object') {
    return obj; // must be an object
  }

  if (isArray(obj)) {
    return obj.map((el) => traverse(el, transform, options));
  }

  if (!isSimpleObject(obj)) {
    return obj; // avoiding String and other custom objects
  }

  return Object.keys(obj).reduce((acc, key) => {
    const convertedKey = transform(key, options);
    acc[convertedKey] = traverse(obj[key], transform, options);
    return acc;
  }, {});
}

const defaultOptions = {
  numberInUpperCase: false,
};

function camelToSnake(str, options = defaultOptions) {
  // Check is options is an object? If no use default settings
  // [] === [object Array]
  // {} === [object Object]
  // 1 === [object Number] etc.
  let nextOptions = options;
  if (Object.prototype.toString.call({}) !== '[object Object]') {
    nextOptions = defaultOptions;
  }

  const { numberInUpperCase } = nextOptions;

  if (!numberInUpperCase) {
    return convertCamelToSnake(str);
  }
  const pattern = /[a-zA-Z_]+|[0-9]+/g;

  const convertedStrig = convertCamelToSnake(str);
  const splitedString = convertedStrig.match(pattern);

  const result = splitedString.reduce((acc, item, index, arr) => {
    const arrayLength = arr.length - 1;

    if (arrayLength === index) {
      return `${acc}${item.toLowerCase()}`;
    }

    return `${acc}${item.toLowerCase()}_`;
  }, '');

  return result;
}

function snakeToCamelCase(obj) {
  if (typeof obj === 'string') {
    return snakeToCamel(obj);
  }

  return traverse(obj, snakeToCamel);
}

function camelToSnakeCase(obj, options) {
  if (typeof obj === 'string') {
    return camelToSnake(obj, options);
  }

  return traverse(obj, camelToSnake, options);
}

export const tempConverter = {
  snakeToCamelCase,
  camelToSnakeCase,
};
