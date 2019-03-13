# Simple web app

In case of that a cors problem using **Node-RED** as **REST server** can not be fixed. I wrote a simple sample **WebApp** to access **REST forward server**, which has **cors enabled**.

```javascript
var cors = require("cors"); // Cors
app.use(cors());
```

_Note:_ Static sample web page uses the code from [stackoverfollow](https://stackoverflow.com/questions/49085931/how-to-call-existing-rest-api-from-a-html-form) as a starting point.

* Basic flow:

WebApp -- REST CALL --> simple-forward-server(**cores enabled**) -- REST CALL --> Node-RED

## Local installation

```sh
git clone https://github.com/thomassuedbroecker/hackathons_and_node-red.git
cd /hackathons_and_node-red/simple_web_app
```

```sh
npm install
```

```sh
npm start
```

## Usage

```sh
npm start

> @ start /hackathons_and_node-red/simple_web_app
> node server.js

Listening on port (3001)
```

Open http://localhost:3001 in the browser and insert some text in the edit box.


