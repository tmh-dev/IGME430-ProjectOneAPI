const http = require('http');
const url = require('url');
const query = require('querystring');
const responseHandler = require('./responses.js');

const PORT = process.env.PORT || process.env.NODE_PORT || 3000;

const handlePost = (req, res, parsedUrl) => {
  if (parsedUrl.pathname === '/addPerson') {
    const response = res;
    const body = [];
    req.on('error', (err) => {
      console.dir(err);
      response.statusCode = 400;
      response.end();
    });

    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      const bodyString = Buffer.concat(body).toString();
      const bodyParams = query.parse(bodyString);
      responseHandler.addPerson(req, res, bodyParams);
    });
  }
};

const handleHead = (req, res, parsedUrl) => {
  if (parsedUrl.pathname === '/getPeople') responseHandler.getPeopleMeta(req, res);
  else if (parsedUrl.pathname === '/notFound') responseHandler.notFoundMeta(req, res);
};

const handleGet = (req, res, parsedUrl) => {
  if (parsedUrl.pathname === '/') responseHandler.getBuild(req, res);
  else if (parsedUrl.pathname === '/style.css') responseHandler.getCSS(req, res);
  else if (parsedUrl.pathname === '/getPeople') responseHandler.getPeople(req, res);
  else responseHandler.notFound(req, res);
};


const onRequest = (req, res) => {
  const parsedUrl = url.parse(req.url);

  if (req.method === 'POST') handlePost(req, res, parsedUrl);
  else if (req.method === 'HEAD') handleHead(req, res, parsedUrl);
  else if (req.method === 'GET') handleGet(req, res, parsedUrl);
};

const app = http.createServer(onRequest);

app.listen(PORT);

console.log(`Server is listening on 127.0.0.1: ${PORT}`);
