import express from 'express';
import {
  getCharacterAllegiances,
  getCharacterBooks,
  getCharacterByName,
  getCharacterByPage,
  getCharacters,
  getCharacterTitles,
  getCurrHouseLords,
} from '../controllers/characterController.js';

const router = express.Router();
// TODO create text if no char/title etc is found - not a server error just not found
router.route('/characters').get(getCharacters);
router.route('/lords').get(getCurrHouseLords);
router.route('/characters/name/:name').get(getCharacterByName);
router.route('/characters/books/:name').get(getCharacterBooks);
router.route('/characters/titles/:name').get(getCharacterTitles);
router.route('/characters/allegiances/:name').get(getCharacterAllegiances);
router.route('/characters/:page').get(getCharacterByPage);

export default router;
