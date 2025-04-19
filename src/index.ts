import express from 'express';
import serverConfig from './config/server.config';

const app = express();

app.listen(serverConfig.port, () => {
    console.log(`Server started at port 4000`);
});