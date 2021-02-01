export const appError = {
  ERR_UNKNOWN: 'Unknown error occurred',
  ERR_SERVER_START_FAILED: 'Server failed to start',
  ERR_MISSING_ENV_VARIABLE: 'Missing required environment variable',
};

export type AppError = keyof typeof appError;

export const createAppError = (name: AppError = 'ERR_UNKNOWN', err?: Error) : Error => {
  const error: Error = {
    name,
    stack: (new Error()).stack,
    message: err?.stack || appError[name],
  }
  if (error) error.message += ` => ${error.name}: ${error.message}`;

  return error;
};

export const throwAppError = (name: AppError = 'ERR_UNKNOWN', err?: Error) : never => {
  throw createAppError(name, err);
}
