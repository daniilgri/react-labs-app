# React Labs App
[![Generic badge](https://img.shields.io/badge/license-MIT-green.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/demo-Heroku-green.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/npm-v6.14.6-blue.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/node-v12.18.4-blue.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/express-v4.16.4-blue.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/react-v16.14.0-blue.svg)](https://shields.io/)


## Installation
In your terminal run script below to install all dependencies for both server and client sides:

```
npm i && npm install --cwd client
```


## Running in development mode

To run server and client in development mode use npm script:

```
npm run dev
```

In case you want to run only client:

```
npm run client
```

In case you want to run only server: 

```
npm run server
```

## Deploying on heroku

Pushing changes or whole project on heroku with heroku-cli. First you need to install it and enter your account:
```
npm i heroku -g
```
```
heroku login 
```
```
heroku git:remote -a react-labs-app 
```
```
git push heroku HEAD:master 
```
After that see you changes on heroku dashboard 💥