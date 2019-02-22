const fs = require('fs');
const data = require('./data');


const build = fs.readdirSync(`${__dirname}/../client/build`);
const index = fs.readFileSync(`${__dirname}/../client/build/index.html`);

const peopleData = data.people;

/*-----------------------------------------------------------------------------------*/


const respond = (req, res, status, type, object) => {
  const headers = {
    'Content-Type': type,
  };

  res.writeHead(status, headers);
  res.write(object);
  console.dir(status);
  res.end();
};

const respondMeta = (req, res, status, type) => {
  res.writeHead(status, { 'Content-Type': type });
  res.end();
};


/*-----------------------------------------------------------------------------------*/

// Serve static files
const getBuild = (req, res) => {
  respond(req, res, 200, 'text/html', build);
};

const getIndex = (req, res) => {
  respond(req, res, 200, 'text/html', index);
};

// const getCSS = (req, res) => {
//   respond(req, res, 200, 'text/css', style);
// };


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

const notFoundMeta = (req, res) => respondMeta(req, res, 404, 'application/json');


/*-----------------------------------------------------------------------------------*/


const getPeople = (req, res) => {
  const resJSON = {
    message: 'Success',
    peopleData,
  };

  respond(req, res, 200, 'application/json', JSON.stringify(resJSON));
};

const getPeopleMeta = (req, res) => respondMeta(req, res, 200, 'application/json');


/*-----------------------------------------------------------------------------------*/


const addPerson = (req, res, body) => {
  const resJSON = {
    message: 'Please fill in all required fields.',
  };


  if (!body.name && !body.quote && !body.description && !body.imageUrl) {
    resJSON.id = 'missingParams';
    return respond(req, res, 400, 'application/json', JSON.stringify(resJSON));
  }

  let statusCode = 201;
  // fix later
  if (!peopleData.persons.filter(person => (person.name === body.name))) {
    statusCode = 204;
    console.dir('hit');
  } else {
    const newPerson = {
      name: body.name.toString(),
      quote: body.quote.toString(),
      description: body.description.toString(),
      imageUrl: body.imageUrl.toString(),
    };

    peopleData.persons.push(newPerson);
  }
  console.dir(body.imageUrl);

  if (statusCode === 201) {
    resJSON.message = 'Created Successfully';
    return respond(req, res, statusCode, 'application/json', JSON.stringify(resJSON));
  }

  return respondMeta(req, res, statusCode, 'application/json');
};


module.exports = {
  getBuild,
  getIndex,
  // getCSS,
  notFound,
  notFoundMeta,
  getPeople,
  getPeopleMeta,
  addPerson,
};
