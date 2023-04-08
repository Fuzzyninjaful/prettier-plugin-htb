import { readFileSync } from 'fs';
import { resolve } from 'path';
import type { Options } from 'prettier';
import { format } from 'prettier';
import { plugin } from '../src/index';

export function getExpected(
  directoryName: string,
  formattedName: string | null = 'formatted.htb'
): string | null {
  return formattedName
    ? readFileSync(resolve(directoryName, formattedName), 'utf-8')
    : null;
}

export function getCode(
  directoryName: string,
  unformattedName: string = 'unformatted.htb'
): string {
  return readFileSync(resolve(directoryName, unformattedName), 'utf-8');
}

export function getActual(
  directoryName: string,
  unformattedName: string = 'unformatted.htb',
  options: Options = {}
): string {
  const unformatted: string = getCode(directoryName, unformattedName);

  return format(unformatted, {
    parser: 'htbasic',
    plugins: [plugin],
    ...options,
  });
}
