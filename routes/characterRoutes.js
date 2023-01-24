import express from 'express';
import {
  getCharacterByName,
  getCharacterByPage,
  getCharacters,
  getCharacterTitles,
} from '../controllers/characterController.js';

const router = express.Router();

router.route('/characters').get(getCharacters);
router.route('/characters/:page/:pageSize').get(getCharacterByPage);
router.route('/characters/name/:name').get(getCharacterByName);
router.route('/characters/titles/:name').get(getCharacterTitles);

export default router;
