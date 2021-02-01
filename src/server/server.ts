import express from 'express';

import env from '@env';
import { throwAppError } from '@shared';

async function start() {
  const server = express();
  server.listen(env.PORT);
}

start().catch((error: Error) => {
  throwAppError('ERR_SERVER_START_FAILED', error);
});
