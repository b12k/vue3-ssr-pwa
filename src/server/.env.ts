import { throwAppError } from '@shared';

const requiredKeys = [
  'PORT',
  'APP_NAME',
  'NODE_ENV',
  'SERVER_ENV',
  'PROXY_PORT',
  'CURRENT_IP_TTL',
  'REQUEST_DATA_URL',
  'GOOGLE_ANALYTICS_ID',
  'PROXY_PARALLEL_QUEUES',
  'PROXY_REQUEST_TIMEOUT',
  'PROXY_VALIDATION_INTERVAL',
] as const;

const optionalKeys = [
  'DB_HOST',
  'DB_NAME',
  'DB_PORT',
  'DB_USER',
  'REDIS_HOST',
  'REDIS_PORT',
  'DB_PASSWORD',
  'DATABASE_URL',
  'REDISCLOUD_URL',
  'REDIS_PASSWORD',
  'BASIC_AUTH_USER',
  'REDIS_DEFAULT_TTL',
  'BASIC_AUTH_PASSWORD',
] as const;

const computedKeys = [
  'DB_URL',
  'REDIS_URL',
] as const;

type RequiredKeys = typeof requiredKeys[number];
type OptionalKeys = typeof optionalKeys[number];
type ComputedKeys = typeof computedKeys[number];
type Env =
  & Record<RequiredKeys, string>
  & Record<OptionalKeys, string | undefined>
  & Record<ComputedKeys, string>;

const env = {} as Env;
requiredKeys.forEach((key) => {
  if (!process.env[key]) throwAppError('ERR_MISSING_ENV_VARIABLE');
  env[key] = process.env[key] as string;
});
optionalKeys.forEach((key) => {
  env[key] = process.env[key] || '';
});

env.DB_URL = env.DATABASE_URL
  || `postgres://${env.DB_USER}:${env.DB_PASSWORD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`;
env.REDIS_URL = env.REDISCLOUD_URL
  || `redis://default:${env.REDIS_PASSWORD}@${env.REDIS_HOST}:${env.REDIS_PORT}`;

export default env;
