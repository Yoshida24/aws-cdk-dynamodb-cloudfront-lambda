/* eslint @typescript-eslint/no-explicit-any: 0 */
declare global {
  interface Window {
    _babelPolyfill: boolean; // eslint-disable-line @typescript-eslint/naming-convention
  }
}

export type PlainObject<T = any> = {
  [key: string]: T;
};
