## Vercel Express API boilerplate

Opinionated Node.js template for creating **simple** APIs and PoCs using Express<sup>1</sup> on Vercel's serverless platform.

## Motivation

Simply put, I got tired of having to do the same dance EVERY SINGLE TIME I needed to quickly spin up an API for a POC I'm working on, or small (micro? 😁) services I spin up.

## Usage

Making use of this template is pretty straightforward. Three ways...

1. Clone it,
2. Fork it, or,
3. Even better, generate a new project on Github using this as a template.

## Project Structure

```
.
├── app.js
├── config/
├── controllers/
├── node_modules/
├── package.json
├── routes/
│   ├── demo.route.js
│   └── index.js
├── services/
├── common/
├── vercel.json
└── yarn.lock
```

### Brief Overview

#### `app.js`

Express app entry point

#### `config/`

for configuration stuff... for example, database connection setup

#### `controllers/`

mostly express route handlers

#### `node_modules/`

black hole 🙃

#### `routes/`

- `index.js` – bootstraps all routes. new namespaces should always be registered here
- `demo.route.js` – sample standalone route

#### `services/`

for "external" services (e.g. a weather.service.js file for interacting with darksky API)

#### `common/`

¯\\\_(ツ)\_/¯

## Bundled Endpoints

After cloning/forking this template, the following endpoints can be immediately accessed:

- `GET /`
- `GET /demo`

---

<sup>1</sup> depending on your use-case, making use of Express with Vercel's serverless platform may not be ideal as they suggest making use of [the helpers](https://vercel.com/blog/vercel-node-helpers) provided for handling requests and making use of the Vercel config file for routing.

While I do make use of the helpers and routing for some projects ([sample](https://gist.github.com/akhilome/ebcc2aa8b03a8377f6eff9ddaff9093b)), I also love using Express as it drastically reduces routing complexity, I've not had any issues with setup, AND, it makes whatever project developed platform agnostic.
