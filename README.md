# React Labs App

[![Generic badge](https://img.shields.io/badge/license-MIT-green.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/npm-v6.14.6-blue.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/node-v12.18.4-blue.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/express-v4.16.4-blue.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/react-v16.14.0-blue.svg)](https://shields.io/)
![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge)
![deploy](https://github.com/daniilgri/react-labs-app/workflows/deploy/badge.svg)

## Installation

In your terminal run script below to install all dependencies for both server and client sides:

```
npm i
```

```
cd server
npm i
```

## Making configuration files

In root directory make .env file with following constants:

```
REACT_APP_FIREBASE_API_KEY=your api key for firebase
REACT_APP_FIREBASE_AUTH_DOMAIN=your auth domain for firebase
REACT_APP_FIREBASE_PROJECT_ID=your project id for firebase
REACT_APP_FIREBASE_DATABASE_URL=database url for firebase
REACT_APP_FIREBASE_STORAGE_BUCKET=storage bucket for firebase
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=messaging sender id for firebase
REACT_APP_FIREBASE_APP_ID=app id for firebase

SKIP_PREFLIGHT_CHECK=true
```

Move to server directory:

```
cd server
```

Make another .env file in server directory with following constants:
(fill those variables according to data in generated private key, see below)

```
DB_URL=

TYPE=
PROJECT_ID=
PRIVATE_KEY_ID=
PRIVATE_KEY=
CLIENT_EMAIL=
CLIENT_ID=
AUTH_URI=
TOKEN_URI=
AUTH_PROVIDER_X509_CERT_URL=
CLIENT_X509_CERT_URL=
```

Then go to your firebase console, move to Service account, in there click on Generate new private key. Rename that file to secretKey.js and put it inside server directory.
Your file should look like this:

```
module.exports = {
  type: process.env.TYPE,
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY,
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
};
```

## Running in development mode

To run server and client in development mode use npm script (run from root directory):

```
npm run dev
```
