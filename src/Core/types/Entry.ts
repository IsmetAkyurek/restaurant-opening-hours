export type Entry<T> = {
  [K in keyof T]: { key: K; value: T[K] };
}[keyof T];
