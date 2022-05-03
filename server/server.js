const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    // or with an array of origins
    // origin: ["https://my-frontend.com", "https://my-other-frontend.com", "http://localhost:3000"],
    credentials: true
  }
});


// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", '*');
//   res.setHeader("Access-Control-Allow-Methods", 'POST, GET');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

const usersData = {
  users: [],
  addUserId: function (id) {
    this.users.push({
      id: id
    })
  },
  addUserName: function (id, name) {
    this.users.some(user => {
      if(user.id === id) {
        user.name = name
        return true
      }
    })
  },
  getUser: function (id) {
    let userData = {}
    this.users.some(user => {
      if(user.id === id) {
        userData = user
        return true
      }
    })
    return userData
  }
}

app.get('/', (req, res) => {
  console.log('request');
  // res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  usersData.addUserId(socket.id)

  socket.emit('connect id', socket.id)

  socket.on('chat message', (msg) => {
    io.sockets.emit('new message',
      {
        userData: usersData.getUser(socket.id),
        text: msg
      }
    )
  })

  socket.on('name user', (data) => {
    usersData.addUserName(socket.id, data)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
server.listen(4000, () => {
  console.log('listening on *:4000');
});