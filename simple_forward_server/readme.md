[Blog post](https://suedbroecker.net/2019/03/13/cors-and-node-red-using-a-simple-forward-server/)

I made some modifications to the original code:
- added header parameter *route*, that is the path to the Node-RED flow (was hard coded before)
- added header parameter *apikey*, which is used in the Node-RED flow for authentication
- a Docker image can be used as well, just start the server with docker run --rm -p 3000:3000 jps99084/simple_forward_server:0.0.2
