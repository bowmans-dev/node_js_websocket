const http = require('http');
const WebSocketServer = require('websocket').server;
let connection = null;

const httpserver = http.createServer((req, res) => {
    console.log("We have received a request");
});

const websocket = new WebSocketServer({ "httpServer": httpserver }); 

httpserver.listen(8080, () => {
    console.log("Server is listening on port 8080");
});

websocket.on("request", request=> {
    connection = request.accept(null, request.origin);
    console.log("Connection accepted");
    
    connection.on("open", () => console.log("Connection opened"));
    connection.on("close", () => console.log("Connection closed"));
    connection.on('message', (message) => {
        console.log("Message recieved");
        console.log(`Received message: ${message.utf8Data}`);
    });
    sendevery5seconds();
});
      
function sendevery5seconds() {
    connection.sendUTF(`Message ${Math.random()}`);
    setTimeout(sendevery5seconds, 5000);
}
