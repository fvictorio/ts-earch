export function reverse(a: string) {
  return a
    .split('')
    .reverse()
    .join('');
}

export function split(a: string, param: string) {
  return a.split(param);
}

export const add = (a: number, b: number) => a + b;
