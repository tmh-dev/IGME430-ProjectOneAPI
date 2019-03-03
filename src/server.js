const http = require('http');
const url = require('url');
const query = require('querystring');
const path = require('path');
const fs = require('fs');
const responseHandler = require('./responses.js');

const PORT = process.env.PORT || process.env.NODE_PORT || 5000;

// Parses the data of a post request to find body parameters
const parseUrlBody = (req, res, method) => {
  const response = res;
  const body = [];
  req.on('error', (err) => {
    console.log(err);
    response.statusCode = 400;
    response.end();
  });

  req.on('data', (chunk) => {
    body.push(chunk);
  });

  req.on('end', () => {
    const bodyString = Buffer.concat(body).toString();
    const bodyParams = query.parse(bodyString);
    method(req, res, bodyParams);
  });
};

// Handler for post requests
const handlePost = (req, res, parsedUrl) => {
  if (parsedUrl.pathname === '/addPerson') parseUrlBody(req, res, responseHandler.addPerson);
};

// Handler for head requests
const handleHead = (req, res, parsedUrl) => {
  if (parsedUrl.pathname === '/getPeople') responseHandler.getPeopleMeta(req, res);
  else responseHandler.notFoundMeta(req, res);
};

// Handler for get requests
const handleGet = (req, res, params, parsedUrl) => {
  if (parsedUrl.pathname === '/') responseHandler.getIndex(req, res);
  else if (parsedUrl.pathname === '/style.css') responseHandler.getCSS(req, res);
  else if (parsedUrl.pathname === '/getPeople') responseHandler.getPeople(req, res, params);
  else responseHandler.notFound(req, res);
};

// Path of react build
const staticBasePath = './client/build/';

// Serve the react static files to the default path
const staticServe = (req, res) => {
  const resolvedBase = path.resolve(staticBasePath);
  const safeSuffix = path.normalize(req.url).replace(/^(\.\.[/\\])+/, '');
  const fileLoc = path.join(resolvedBase, safeSuffix);

  fs.readFile(fileLoc, (err, data) => {
    if (err) {
      res.writeHead(404, 'Not Found');
      res.write('404: File Not Found!');
      return res.end();
    }

    res.statusCode = 200;

    res.write(data);
    return res.end();
  });
};

// primary request handler
const onRequest = (req, res) => {
  // Parse the url using the url module
  const parsedUrl = url.parse(req.url);
  // grab the query params
  const params = query.parse(parsedUrl.query);
  // serve static files
  if (parsedUrl.pathname.includes('/client/build') || parsedUrl.pathname.includes('/static')) staticServe(req, res);
  else if (req.method === 'POST') handlePost(req, res, parsedUrl);
  else if (req.method === 'HEAD') handleHead(req, res, parsedUrl);
  else if (req.method === 'GET') handleGet(req, res, params, parsedUrl);
};

const app = http.createServer(onRequest);

app.listen(PORT);

console.log(`Server is listening on 127.0.0.1: ${PORT}`);
