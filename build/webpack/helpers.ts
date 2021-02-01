import { resolve } from 'path';

const {
  env: {
    NODE_ENV,
    SERVER_ENV,
  },
} = process;

export const isProdMode = NODE_ENV !== 'development';
export const resolvePath = (...args: Array<string>) => resolve(process.cwd(), ...args);
export const isProdServer = SERVER_ENV === 'production';
