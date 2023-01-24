import express from 'express';
import router from './routes/characterRoutes.js';
const app = express();

app.use('/firenice/', router);
const port = 4545;
// https://anapioficeandfire.com/api/characters

app.listen(port, () => {
  console.log('🔥 on port ' + port);
});
