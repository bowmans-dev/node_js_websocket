#### Websocket using Node JS - https://github.com/hnasr/javascript_playground/tree/master/websocket-demo
### https://www.youtube.com/watch?v=2Nt-ZrNP22A

- To install websocket:
#### ` npm i `

- Run index.js in your debugger and open a browser tab with dev tools 

- Use your browser dev-tools console to initialize a new websocket connection to start receiving messages from the server:
#### ` ws = new WebSocket("ws://localhost:8080"); `
#### ` ws.onmessage = message => console.log(`Received: ${message.data}`);`

- Use connection.send to send stuff to the client using the debugger command line:
#### ` connection.send("Hello client from the server"); `
