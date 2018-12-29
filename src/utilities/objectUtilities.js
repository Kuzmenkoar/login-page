// simple version of lodash get
export function get(object, keys, defaultVal) {
  if (object === null || typeof object !== 'object') {
    return defaultVal;
  }
  keys = Array.isArray(keys) ? keys : keys.split('.');
  object = object[keys[0]];
  if (object && keys.length > 1) {
    return get(object, keys.slice(1), defaultVal);
  }
  return object === undefined ? defaultVal : object;
}
