const fs = require('fs');
const data = require('./data');

const index = fs.readFileSync(`${__dirname}/../client/build/index.html`);
const style = fs.readFileSync(`${__dirname}/../client/build/style.css`);

const people = data;

/*-----------------------------------------------------------------------------------*/

// General, reusable method to respond to requests, for files and json
const respond = (req, res, status, type, object) => {
  const headers = {
    'Content-Type': type,
  };

  res.writeHead(status, headers);
  res.write(object);
  res.end();
};

// Respond to head requests with no object
const respondMeta = (req, res, status, type) => {
  res.writeHead(status, { 'Content-Type': type });
  res.end();
};


/*-----------------------------------------------------------------------------------*/

// Get the index.html main page
const getIndex = (req, res) => {
  respond(req, res, 200, 'text/html', index);
};

const getCSS = (req, res) => {
  respond(req, res, 200, 'text/css', style);
};


/*-----------------------------------------------------------------------------------*/


// Function for 404 not found requests with message
const notFound = (req, res) => {
  // create error message for response
  const resJSON = {
    id: 'notFound',
  };

  if (req.method === 'GET') resJSON.message = 'The page you are looking for was not found.';

  // return a 404 with an error message
  respond(req, res, 404, 'application/json', JSON.stringify(resJSON));
};

// head request for not found, no object returned
const notFoundMeta = (req, res) => respondMeta(req, res, 404, 'application/json');


/*-----------------------------------------------------------------------------------*/

// Function for getting the list of people in the data.js file
const getPeople = (req, res, params) => {
  const resJSON = {
    message: 'Success',
    people,
  };

  // If the user searched for something, filter down to results that match query
  if (params.query) {
    if (people.people.some(person => person.name.toLowerCase().includes(params.query))
      !== undefined) {
      const resObj = {
        people: people.people.filter(person => person.name.toLowerCase().includes(params.query)),
      };
      resJSON.people = resObj;
      resJSON.message = 'Matching results returned.';
    } else {
      resJSON.message = 'No results matching search term found.';
    }
  }

  // If sorting is active, default to alphabetical search
  if (params.sort) {
    const resObj = {
      people: resJSON.people.people.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      }),
    };
    resJSON.people = resObj;
  }

  respond(req, res, 200, 'application/json', JSON.stringify(resJSON));
};

// head request for get people, no object returned
const getPeopleMeta = (req, res) => respondMeta(req, res, 200, 'application/json');


/*-----------------------------------------------------------------------------------*/


// Add a new person to the data and store it temporarily in memory
const addPerson = (req, res, body) => {
  const resJSON = {
    message: 'Please fill in all required fields.',
  };

  // check if user supplied all the necessary fields
  if (!body.name && !body.quote && !body.description && !body.imageUrl) {
    resJSON.id = 'missingParams';
    return respond(req, res, 400, 'application/json', JSON.stringify(resJSON));
  }

  let statusCode = 201;

  // check if the person already exists by checking names of current people
  if (!people.people.filter(person => (person.name === body.name))) {
    statusCode = 204;
  } else {
    const newPerson = {
      name: body.name.toString(),
      quote: body.quote.toString(),
      description: body.description.toString(),
      imageUrl: body.imageUrl.toString(),
    };

    people.people.push(newPerson);
  }

  if (statusCode === 201) {
    resJSON.message = 'Created Successfully';
    return respond(req, res, statusCode, 'application/json', JSON.stringify(resJSON));
  }

  return respondMeta(req, res, statusCode, 'application/json');
};


module.exports = {
  getIndex,
  getCSS,
  notFound,
  notFoundMeta,
  getPeople,
  getPeopleMeta,
  addPerson,
};
