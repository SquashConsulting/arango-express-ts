type handler<T> = (value: T) => T;

export default function pipe<T>(initialValue: T, ...fns: handler<T>[]): T {
  return fns.reduce(
    (prev: T, nextFn: handler<T>): T => nextFn(prev),
    initialValue,
  );
}
