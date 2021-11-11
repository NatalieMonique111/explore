# Explore Our World

Explore Our World is a React app backed by an Express API server, persisting data from a
PostgreSQL database populated with UNESCO world heritage site data. The project has a basic interface that fetches images, if available, from a Flickr API.

[See the app in action](https://explore-our-world.herokuapp.com/).

<img src="img/explore.png">

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

## Initialize the Database

Let's set up the database server, create the application database, and seed it
with the UNESCO data. You only need to do this the first time you set up your
local environment.

```sh
npm run db:init
```

ℹ️ If you ever need to start over with the database, you can run this command
again which will delete your existing data and start from scratch.

## Start

```sh
npm start
```

Visit <http://localhost:3000>.

## Flickr API

1.  [Apply for a free Flickr API key](https://www.flickr.com/services/apps/create/apply/).
2.  Create a config.js file, to place key data.
3.  Place config.js in .gitignore
4.  Import FLICKR_API_KEY from config.js
5.  In the Gallery component, place FLICKR_API_KEY as the value for the data object property: api_key.

[Note: Adding Custom Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)

## Shut Down

1. `Ctrl-C` to stop the Express and React development servers.
2. `npm stop` to stop and destroy the PostgreSQL Docker container. Don't worry,
   your data is safe.

## Want More Details?

- [Access UNESCO world heritage sites XML data](https://whc.unesco.org/en/list/).
- [Read about the Flickr API](https://www.flickr.com/services/developer/api/).
- [Read about the application stack](docs/application-stack.md).
- [Read about the Express server](server/README.md).
- [Read about the React app](app/README.md).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/gsong"><img src="https://avatars.githubusercontent.com/u/607420?v=4?s=100" width="100px;" alt=""/><br /><sub><b>George Song</b></sub></a><br /><a href="https://github.com/gsong/express-react-project-example/commits?author=gsong" title="Code">💻</a> <a href="https://github.com/gsong/express-react-project-example/commits?author=gsong" title="Documentation">📖</a> <a href="#infra-gsong" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-gsong" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/sinuheg"><img src="https://avatars.githubusercontent.com/u/14079734?v=4" width="100px;" alt=""/><br /><sub><b>Sinuhe Guerra</b></sub></a><br /><a href="#contributors" title="Bug reports">🐛</a> <a href="#contributors" title="Ideas, Planning, & Feedback">🤔</a> <a href="#contributors" title="Answering Questions">💬</a> <a href="#contributors" title="User Testing">📓</a></td>
    <td align="center"><a href="https://github.com/jenhuynh"><img src="https://avatars.githubusercontent.com/u/15962197?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jen Huynh</b></sub></a><br /><a href="#contributors" title="Bug reports">🐛</a><a href="#contributors" title="User Testing">📓</a><a href="#contributors" title="Reviewed Pull Requests">👀</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://www.tabbykatz.com/"><img src="https://avatars.githubusercontent.com/u/55110763?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tabitha O'Melay</b></sub></a><br /><a href="#contributors" title="User Testing">📓</a><a href="#contributors" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/smgraywood"><img src="https://avatars.githubusercontent.com/u/81881720?v=4" width="100px;" alt=""/><br /><sub><b>Sarah Graywood</b></sub></a><br /><a href="#contributors" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/Shaylan7"><img src="https://avatars.githubusercontent.com/u/80442267?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Shaylan7</b></sub></a><br /><a href="#contributors" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/xiaozhong21"><img src="https://avatars.githubusercontent.com/u/11522217?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Xiao Zhong</b></sub></a><br /><a href="#contributors" title="User Testing">📓</a><a href="#contributors" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
