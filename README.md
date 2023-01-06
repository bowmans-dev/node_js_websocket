### Websocket using Node JS - 
https://github.com/hnasr/javascript_playground/tree/master/websocket-demo
### https://www.youtube.com/watch?v=2Nt-ZrNP22A

### To set up locally run:
```
npm i
```
### To initialize a new websocket connection and begin receiving messages from the server
### Enter the following in your browser dev-tools console:

```
ws = new WebSocket("ws://localhost:8080"); 
```

```
ws.onmessage = message => console.log(`Received: ${message.data}`);
```

- Use connection.send to send stuff to the client using the debugger command line:

```
 connection.send("Hello client from the server");
```
