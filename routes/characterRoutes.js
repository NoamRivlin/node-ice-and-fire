import express from 'express';
import {
  getCharacterByName,
  getCharacters,
  getCharacterTitles,
} from '../controllers/characterController.js';

const router = express.Router();

router.route('/characters').get(getCharacters);
router.route('/characters/name/:name').get(getCharacterByName);
router.route('/characters/title/:name').get(getCharacterTitles);

export default router;
