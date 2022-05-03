// отправить текущему сокету сформировавшему запрос (туда откуда пришла)
socket.emit('message', "this is a test");

// отправить всем пользователям, включая отправителя
io.sockets.emit('message', "this is a test");

// отправить всем, кроме отправителя
socket.broadcast.emit('message', "this is a test");

// отправить всем клиентам в комнате (канале) 'game', кроме отправителя
socket.broadcast.to('game').emit('message', 'nice game');

// отправить всем клиентам в комнате (канале) 'game', включая отправителя
io.sockets.in('game').emit('message', 'cool game');

// отправить конкретному сокету, по socketid
io.sockets.socket(socketid).emit('message', 'for your eyes only');