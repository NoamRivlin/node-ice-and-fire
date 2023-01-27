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
    res.status(401).send('failed');

    // next();
  }
};

export const getCharacterByName = async (req, res) => {
  let { name } = req.params;
  try {
    const callCharacter = await axios.get(`${baseURL}?name=${name}`);
    const character = callCharacter.data;
    if (!character.length) {
      res.status(401).send({ message: 'character not found' });
    }
    res.json(character);
    // next();
  } catch (error) {
    console.log(error.message);
    res.status(401).send('failed');
    // next();
  }
};

export const getCharacterTitles = async (req, res) => {
  // Balon Greyjoy
  let { name } = req.params;
  try {
    const callCharacter = await axios.get(`${baseURL}?name=${name}`);
    const characterTitles = callCharacter.data[0].titles;
    console.log(characterTitles);
    res.json(characterTitles);
    // next();
  } catch (error) {
    console.log(error.message);
    res.status(401).send('failed');
    // next();
  }
};

export const getCharacterByPage = async (req, res) => {
  const { page } = req.params;
  let { pageSize } = req.query;
  pageSize ? pageSize : (pageSize = 20);

  try {
    const callCharacters = await axios.get(
      `${baseURL}?page=${page}&pageSize=${pageSize}`
    );
    const characters = callCharacters.data;
    console.log(characters.length);
    res.json(characters);
    // next();
  } catch (error) {
    console.log(error.message);
    res.status(401).send('failed');
    // next();
  }
};

export const getCharacterBooks = async (req, res) => {
  // Balon Greyjoy
  let { name } = req.params;
  try {
    const callCharacter = await axios.get(`${baseURL}?name=${name}`);
    const characterBooks = callCharacter.data[0].books;
    const bookTitles = [];
    //the promise all is quicker but not consistent
    // await Promise.all(
    //   characterBooks.map(async (book) => {
    //     const callBook = await axios.get(book);
    //     const callBookTitles = callBook.data.name;
    //     console.log(callBook.data.name);
    //     bookTitles.push(callBookTitles);
    //     // const bookTitle = callBook.name
    //   })
    // );
    //the for of is slower but is consistent
    for (const book of characterBooks) {
      const callBook = await axios.get(book);
      const callBookTitles = callBook.data.name;
      bookTitles.push(callBookTitles);
    }
    /*
    The line of code const result = {name, books: bookTitles}; is using the property shorthand notation. 
    This notation allows you to omit the key if the key has the same name as the variable being assigned to it.
    */
    const result = { name, books: bookTitles };
    res.json(result);
    // next();
  } catch (error) {
    console.log(error.message);
    res.status(401).send('failed');
    // next();
  }
};
export const getCharacterAllegiances = async (req, res) => {
  // Balon Greyjoy
  let { name } = req.params;
  try {
    const callCharacter = await axios.get(`${baseURL}?name=${name}`);
    const characterAllegiancesURL = callCharacter.data[0].allegiances;
    const allegiances = [];

    for (const allegiance of characterAllegiancesURL) {
      const callAllegiances = await axios.get(allegiance);
      const allegiancesName = callAllegiances.data.name;
      allegiances.push(allegiancesName);
    }
    /*
    The line of code const result = {name, books: bookTitles}; is using the property shorthand notation. 
    This notation allows you to omit the key if the key has the same name as the variable being assigned to it.
    */
    const result = { name, allegiances };
    res.json(result);
    // next();
  } catch (error) {
    console.log(error.message);
    res.status(401).send('failed');
    // next();
  }
};
export const getCurrHouseLords = async (req, res) => {
  // Balon Greyjoy
  try {
    const callHouses = await axios.get(
      `https://www.anapioficeandfire.com/api/houses`
    );
    const callHousesData = callHouses.data;
    console.log(callHousesData);

    console.log(callHousesData.length);
    const currHouseLords = [];

    for (const HouseData of callHousesData) {
      const lordOfHouseURL = HouseData.currentLord;
      if (!lordOfHouseURL) {
        currHouseLords.push(`The ${HouseData.name} has no current lord`);
        continue;
      }
      const callLordCharacter = await axios.get(lordOfHouseURL);
      currHouseLords.push(
        `${HouseData.name}'s lord is ${callLordCharacter.data.name}`
      );
    }

    const result = { currHouseLords };
    res.json(result);
    // next();
  } catch (error) {
    console.log(error.message);
    res.status(401).send('failed');
    // next();
  }
};
