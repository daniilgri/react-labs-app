# React Labs App
[![Generic badge](https://img.shields.io/badge/license-MIT-green.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/demo-Netlify-green.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/npm-v6.14.6-blue.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/node-v12.18.4-blue.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/express-v4.16.4-blue.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/react-v16.14.0-blue.svg)](https://shields.io/)


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
```
DB_URL=your db your for firebase
```

## Running in development mode

To run server and client in development mode use npm script (run from root directory):

```
npm run dev
```
