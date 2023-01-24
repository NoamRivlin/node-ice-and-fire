import axios from 'axios';
const baseURL = 'https://www.anapioficeandfire.com/api/characters';
export const getCharacters = async (req, res, next) => {
  try {
    const callCharacters = await axios.get(`${baseURL}?page=1&pageSize=20`);
    const characters = callCharacters.data;
    console.log('characters');
    res.json(characters);
    // next();
  } catch (error) {
    console.log(error.message);
    res.send('failed');
    // next();
  }
};

export const getCharacterByName = async (req, res) => {
  let { name } = req.params;
  try {
    const callCharacter = await axios.get(`${baseURL}?name=${name}`);
    const character = callCharacter.data;
    res.json(character);
    // next();
  } catch (error) {
    console.log(error.message);
    res.send('failed');
    // next();
  }
};

export const getCharacterTitles = async (req, res) => {
  let { name } = req.params;
  try {
    const callCharacter = await axios.get(`${baseURL}?name=${name}`);
    const characterTitles = callCharacter.data[0].titles;
    console.log(characterTitles);
    res.json(characterTitles);
    // next();
  } catch (error) {
    console.log(error.message);
    res.send('failed');
    // next();
  }
};


export const getCharacterByPage = async (req, res) => {
  let { page, pageSize } = req?.params;
  // pageSize ? pageSize : 10;
  console.log("req.params");
  try {
    const callCharacters = await axios.get(`${baseURL}?page=${page}&pageSize=${pageSize ? pageSize : 10}`);
    const characters = callCharacters.data;
    res.json(characters);
    // next();
  } catch (error) {
    console.log(error.message);
    res.send('failed');
    // next();
  }
};