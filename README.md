# Aethel - The Spirit Guide 🥃

_Keeping track of and presenting your booze collection since 2019._

## About

This is a small, [Eleventy](https://github.com/11ty/eleventy)-based static file generation environment which provides you a way to show off your collection of booze (or whatever else) as an easy website.
The data is provided via a simple JSON file.

## Usage

- Fork this repository
- Run `npm install` to get all dependencies
- Run `npm start` to start the local development environment
- Adjust the library inside `_data/spirits.json`

### Hints
- Site data can be adjusted in `_data/site.json`
- The output will be exported to the folder `_site`
- You can build your library without running the development environment first with `npm run build`
- Tests are defined in `aethel.test.js` and are available via `npm test`
