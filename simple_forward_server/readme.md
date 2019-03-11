# Simple forward server

In case of a cors problem using **Node-RED** as **REST server** can not be fixed.
I wrote a simple sample **REST forward server**, which has **cors enabled**.

```javascript
var cors = require("cors"); // Cors
app.use(cors());
```

* Basic flow:

WebApp -> simple-forward-server(**cores enabled**) -> Node-RED

## Local installation

```sh
npm install
```

```sh
npm start
```

## Usage

I created a sample in [postman collection](postman_collection/Node-RED-REST-sample.postman_collection.json)

Sample output when postman is used:

```sh
> simple_forward_server@1.0.0 start
> node server.js

forward server is running
URL: 
 https://hackathon-node-red-tsuedbro.eu-de.mybluemix.net/getData
send request
in request 

Success: 
 {"name":"hackathon","cloud":"ibm","message":"hello world"}
```



