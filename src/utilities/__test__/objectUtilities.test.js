import { get } from '../objectUtilities';

describe('object utils', () => {
  const DEFAULT_VAL = 'DEFAULT_VAL';
  it('get default value', () => {
    expect(get({}, 'x', DEFAULT_VAL)).toBe(DEFAULT_VAL);
    expect(get({}, 'x.x', DEFAULT_VAL)).toBe(DEFAULT_VAL);
    expect(get({ x: {} }, 'x.x', DEFAULT_VAL)).toBe(DEFAULT_VAL);
  });

  it('get works correctly', () => {
    expect(get({ x: DEFAULT_VAL }, 'x')).toBe(DEFAULT_VAL);
    expect(get({ x: { x: DEFAULT_VAL } }, 'x.x')).toBe(DEFAULT_VAL);
    expect(get({ x: { x: DEFAULT_VAL } }, ['x', 'x'])).toBe(DEFAULT_VAL);
  });
});
