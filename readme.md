# Node-RED Backend

Node-RED often is used to build prototypes, for example in hackathons. I forked [Thomas' repo](https://github.com/thomassuedbroecker/hackathons_and_node-red) and added some addional features:

- a Node-RED backend to perform CRUD actions
- a a simple Node-RED frontend  
- a dockerized version of the simple forward server

# Architecture
This solution consists of the following parts

- a Cloudant database
- the Backend-App (business logic, interfaces to external systems, CRUD requests to the database)
- a simple forwarding server, needed to provide an interface to Web frontends

[Architecture](Node-RED-Backend.jpg) 

# Prerequisites
- IBM Cloud account

# Node-RED Backend app
## How it works
The API key is set when the flow starts (initialization node). When a request is received (e.g. Create doc), the header parameter apikey is checked first. If it is not correct, a 401 error is thrown. Otherwise the requested actions is performe

# Simple Forwarding Server

# Node-RED Frontend app

