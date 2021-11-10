# Explore Our World

Explore Our World is a React app backed by an Express API server, persisting data from a
PostgreSQL database populated with UNESCO world heritage site data. The project has a basic interface that fetches images, if available, from a Flickr API.

[See the app in action](https://explore-our-world.herokuapp.com/).

## To Use Locally

### Docker

This project relies on Docker to run the PostgreSQL server. You must install
Docker first before continuing.

Use one of these methods:

- Use Homebrew on macOS: `brew install --cask docker`
- [Follow the instructions on the Docker website](https://www.docker.com/)

Once you've installed Docker Desktop, you'll need to launch the app. On macOS,
it's located in `/Applications/Docker`.

### Node

You'll need to install Node v14 or above. [`nvm`](https://nodejs.org/en/) is highly recommended.

### Install NPM Packages

```sh
npm install
```

### Set Up `postgres` User Password and Database Name

We need to set up couple pieces of information in order to start a new
PostgreSQL server instance, as well as to connect to it later from the Express
server.

1. Copy the example environment file

   ```sh
   cp .env.example .env
   ```

2. You can choose to edit `.env` or just use as-is.

[See the PostgreSQL Docker image documentation for more
information](https://hub.docker.com/_/postgres).

## Start

```sh
npm start
```

Visit <http://localhost:3000>.

## Flickr API

1.  [Apply for a free Flickr API](https://www.flickr.com/services/apps/create/apply/). 
2.  create a config.js file, to place key data.
3.  place config.js in .gitignore.

## Shut Down

1. `Ctrl-C` to stop the Express and React development servers.
2. `npm stop` to stop and destroy the PostgreSQL Docker container. Don't worry,
   your data is safe.

## Want More Details?
- [Access UNESCO World Heritage Sites XML data](https://whc.unesco.org/en/list/).
- [Read about the Flickr API](https://www.flickr.com/services/developer/api/).
- [Read about the application stack](docs/application-stack.md).
- [Read about the Express server](server/README.md).
- [Read about the React app](app/README.md).
