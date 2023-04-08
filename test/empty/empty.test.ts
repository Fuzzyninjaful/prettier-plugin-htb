import { getActual, getCode } from '../common';

describe('Empty', () => {
  it('should not modify empty files', () => {
    const code: string = getCode(__dirname);
    const actual: string = getActual(__dirname);

    expect(actual).toEqual(code);
  });
});
