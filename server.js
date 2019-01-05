const { createServer } = require('http');
const { get } = require('https');
const { parse } = require('url');
const next = require('next');
const dotenv = require('dotenv');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

dotenv.config();

const { GOOGLE_MAPS_API_KEY } = process.env;

app.prepare().then(() => {
  createServer(async (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (req.method === 'POST') {
      if (pathname === '/api/autosuggest') {
        let body = '';

        req.on('data', (data) => {
          body += data;
        });

        req.on('end', () => {
          const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${GOOGLE_MAPS_API_KEY}&input=${body}`;
          console.log('url', url);
          get(url, (resp) => {
            let data = '';

            resp.on('data', (chunk) => {
              data += chunk;
            });

            resp.on('end', () => {
              console.log(JSON.parse(data));
            });
          }).on('error', (err) => {
            console.log(`Error: ${err.message}`);
          });
        });
      }
    }

    const validPathnames = ['about', 'terms', 'buy', 'sell'];
    if (validPathnames.includes(pathname)) {
      app.render(req, res, pathname, query);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
